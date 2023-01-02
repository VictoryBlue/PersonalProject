function mynew(Func, ...args) {
  // 1.创建一个新对象
  const obj = {};
  // 2.新对象原型指向构造函数原型对象
  obj.__proto__ = Func.prototype;
  // 3.obj调用Func的代码进行初始化,args是数组,this指向obj
  let result = Func.apply(obj, args);
  // 4.根据返回值判断
  return result instanceof Object ? result : obj;
}

// apply的用法
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.apply(this, [name, price]);
//   this.category = 'food';
// }

// function Toy(name, price) {
//   Product.apply(this, [name, price]);
//   this.category = 'toy';
// }

// var cheese = new Food('feta', 5);
// var fun = new Toy('robot', 40);
