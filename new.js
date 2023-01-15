// 从如何使用new关键字说起，new Person(“wls", 16),创建一个Person对象，接受两个参数，因此mynew需要接受两种参数：1.构造函数 2.初始化参数
// new一个对象的过程：创建一个新对象，继承构造函数的属性和方法，初始化，返回对象
// 这里还要注意一个点：为什么需要根据返回值判断result？因为new的行为是，如果构造函数没有显式返回，那么就返回构造函数内的this指向的对象，如果有返回值就会根据返回值生成对象并返回。
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
