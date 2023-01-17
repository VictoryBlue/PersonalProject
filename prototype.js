// 构造函数，用new来调用的函数就是构造函数
// 构造函数如果没有显式的返回值，会返回创建的新对象
// 如果有return 一个对象，那么构造函数会返回写在return中的对象

// function Person() {
//   return { name: 'wls' };
// }
// const wls = new Person();
// console.log(wls);

// 原型（prototype），原型就是一个对象，对象里面是可以被实例继承的属性和方法。
// 每一个函数都有原型,函数与原型的关系在于，函数.Prototype就是原型. 原型中包含着构造函数。
// 正是由于函数记录了原型，构造函数在new一个对象的时候，新对象才知道__proto__应该指向哪里。

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
// 这个函数的原型是Person.prototype
// 函数的原型里包括构造函数
console.log(Person.prototype.constructor === Person); //true
// 实例，由new和构造函数创造的出来的对象是实例。对象的__proto__指向prototype
const wls = new Person();
console.log(wls.__proto__ === Person.prototype); //true

//对象的 hasOwnProperty() 来检查对象自身中是否含有该属性
//使用 in 检查对象中是否含有某个属性时，如果对象中没有但是原型链中有，也会返回 true
#
