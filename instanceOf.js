function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left); // Note
  while (true) {
    if (!proto) return false;
    if (proto === right.prototype) {
      return true;
    } else {
      proto = Object.getPrototypeOf(proto);
    }
  }
}
function Person() {}
var p = new Person();
console.log(myInstanceof(p, Person));
