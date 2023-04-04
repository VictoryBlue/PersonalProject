'use strict';

function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSometing() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }
  

  return {
    doSometing: doSometing,
    doAnother: doAnother,
  };
}
foo = CoolModule();
foo.doSometing();

// 现在这是一个单例模式，这个实例只能唯一的在foo上，不像上一种方式，可以创建多个coolModule模块
var foo = (function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSometing() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }

  return {
    doSometing: doSometing,
    doAnother: doAnother,
  };
})();
