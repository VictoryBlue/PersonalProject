Function.prototype.myCall = function (context, ...args) {
  // 如果未定义上下文，this指向window
  context = context === undefined || context === null ? window : context;

  context.__fn = this.prototype.constructor;
  let result = context.__fn(...args);
  delete context.__fn;
  return result;
};
// test
// function person(name) {
//   this.name = name;
// }
// a = {};
// person.myCall(a, 'wls');
// console.log(a);
