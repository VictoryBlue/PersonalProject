// args 是数组
// this在执行的时候是会变得，如果要让改变this的指向到context，那么就应该让context调用存在this的方法
Function.prototype.myApply = function (context, args) {
  context = context === undefined || context === null ? window : context;
  // this这时指向调用者
  context.__fn = this;
  let result = context.__fn(args); // 这时的this指向context，用args，执行构造函数（为了测试方便构造函数应该显式返回this）
  delete context.__fn;
  return result;
};

// test
function person(name) {
  this.name = name;
  return this;
}

console.log(person.apply({}, ['wls']));
// arguments 在函数中可以指代传入的参数，但是它不具有数组的方法。