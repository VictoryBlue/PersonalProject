// bind就是说，你要用一个函数func，但是这个函数的this的指向不是你想要的，bind返回一个函数，这个函数和func的执行逻辑相同【传参，执行，返回值】但是这个函数的this是已经指定好的 bind(context)中的context。
// bind的具体用法
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
Function.prototype.myBind = function (context, ...args1) {
  const self = this;
  return function F(...args2) {
    if (self instanceof F) {
      return new F()
    }
    return self.apply(context, [...args1, ...args2]);
  };
};
const unboundGetX = module.getX;
console.log(unboundGetX()); // unboundGetX 声明为全局函数
// expected output: undefined

const boundGetX = unboundGetX.bind(module); // 把 unboundGetX 的 this 绑定成module
console.log(boundGetX());
// expected output: 42

// 写法
Function.prototype.myBind = function (context, ...args) {
  context = context === undefined || context === null ? window : context;
  const _this = this;
  _this.apply(context);
  return _this(...args);
};
function person() {}
obj = {};
obj.person = person.myBind(obj);
console.log(obj.person);
