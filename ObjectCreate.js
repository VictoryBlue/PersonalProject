// Object.create 函数是实现继承的一种方法
// 调用new Child()会自动把child实例上的__proto__指向Child.prototype.
// 因此继承的时候应该写 Child.prototype = Object.create(Parent.prototype)
function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

function Parent5() {
  this.name = 'parent5';
  this.play = [1, 2, 3];
}
Parent5.prototype.makeMoney = function () {
  console.log('make money');
};
function Child5() {
  Parent5.call(this);
  this.type = 'child5';
}

Child5.prototype = Object.create(Parent5.prototype);
// child5.__proto__ = Object.create(Parent5.prototype);
const child5 = new Child5();
