let promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success');
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
// 1243

// ref: https://juejin.cn/post/6844904077537574919