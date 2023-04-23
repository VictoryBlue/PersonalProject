// or
// exports.a = 1;

// b.js
var module = require('./a.js');
module.a; // -> log 1
console.log(module.a);
import { result } from './a.js';
console.log(result);