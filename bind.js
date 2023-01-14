// bind的具体用法
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
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
