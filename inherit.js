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
