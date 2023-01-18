// bind就是说，你要用一个函数func，但是这个函数的this的指向不是你想要的，bind返回一个函数，这个函数和func的执行逻辑相同【传参，执行，返回值】但是这个函数的this是已经指定好的 bind(context)中的context。
// bind的具体用法
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
// 感觉bind就是分两次接受参数，第一次返回函数，第二次返回对象复用代码的结果
Function.prototype.myBind = function (context, ...args1) {
  const self = this;
  return function F(...args2) {
    if (self instanceof F) {
      // bind 生成的函数可以当成构造函数和new连用，这意味着当成被当成构造函数使用的时候，this总是指向new和构造函数造出来的对象
      // 所以在context上复用代码就没有意义，因为new决定了不会在context上应用代码
      return new self([...args1, ...args2]);
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

function person() {}
obj = {};
obj.person = person.myBind(obj);
console.log(obj.person);
