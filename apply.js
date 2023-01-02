// args 是数组

Function.prototype.myApply = function (context, args) {
  context = context === undefined || context === null ? window : context;
  // this这时指向Function
  context.__fn = this;
  let result = context.__fn(args); // 这时的this指向context，用args，执行构造函数（为了测试方便构造函数应该显式返回this）
  delete context.__fn;
  return result;
};

// test
function person() {
  return this;
}

console.log(person.apply({}));
