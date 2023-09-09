// arguments 参数在javaScript里面
// 因此node modules.js 看看输出，发现真的有，也就是说 console.log是被包裹在函数中的
// console.log(arguments); // exports  require module  __filename __dirname
const C = require('./test-module-1');

const calc1 = new C();
console.log(calc1.add(2, 3));

const { add, multiply } = require('./test-module-2');
console.log(add(2, 3));
// caching
// hello from the module
// Log this beautifull text 🍬
// Log this beautifull text 🍬
// Log this beautifull text 🍬
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
