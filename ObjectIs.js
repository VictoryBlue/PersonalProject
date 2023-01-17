// Object.is 和 === 的区别：
// Object.is修复了一些 === 的bug
// Object.is(+0,-0) false 因为1/+0 为Infinity， 1/-0为-Infinity
// Object.is 对两个NaN返回true， === 返回false
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // 说明x，y都是NaN
    return x !== x && y !== y;
  }
}
