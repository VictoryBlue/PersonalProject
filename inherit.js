function Parent1() {
  this.name = 'parent1';
  // this.educate = educate;
}
Parent1.prototype.educate = function educate() {
  console.log('educate yourself');
};

function Child1() {
  // Parent1.call(this);
  this.type = 'child1';
}
const child1 = new Child1();
child1.__proto__ == Parent1.prototype;
console.log(Object.prototype.toString.call(child1.__proto__));
// Error:child1.educate is not a function
console.log(child1.educate());

// 这样写的时候子类虽然能够拿到父类的属性值，但是问题是父类原型对象中一旦存在方法那么子类无法继承。那么引出下面的方法。
function Parent2() {
  this.name = 'parent2';
  this.play = [1, 2, 3];
}
Parent2.prototype.educate = function () {
  console.log('teach yourself');
};
function Child2() {
  this.type = 'child2';
}
// 继承必然是修改原型,这个写法有一点不好，就是改变了Child2的构造函数为Parent2的构造函数
Child2.prototype = new Parent2();
// 因此更改Child2的构造函数
Child2.prototype.constructor = Child2;
a = new Child2();
console.log(a.educate());

// 混用模式,有一个缺陷 new Parent3
function Parent3() {
  this.name = 'parent3';
  this.play = [1, 2, 3];
  console.log('create parent3');
}

function Child3() {
  Parent3.call(this);
  this.type = 'child3';
}
Child3.prototype = new Parent3();
Child3.prototype.constructor = Child3;
const child3_1 = new Child3();
const child3_2 = new Child3();
child3_1.play.push(4);
console.log(child3_1, child3_2); //[1,2,3,4],[1,2,3]

function Parent4() {
  this.name = 'parent4';
  this.play = [1, 2, 3];
}
function Child4() {
  Parent4.apply(this);
  this.type = 'child4';
}

Child4.prototype = Parent4.prototype;

// 最规范的写法，修正了new Parent4()多运行一次的错误，也改变了构造函数
function Parent5() {
  this.name = 'parent5';
  this.play = [1, 2, 3];
}
function Child5() {
  Parent5.call(this);
  this.type = 'child5';
}

Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;
