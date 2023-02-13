// 思考是否有初始值的情况
// 思考我们如何给reduce传入回调，传入回调的时候我们能使用哪些参数
// 那些我们能使用的参数必然是被reduce传进来的。
Array.prototype._reduce = function (fn, initailval) {
  // 做一个新的数组
  let arr = Array.prototype.slice.call(this);
  // 如果给了初始值
  let startIndex = initailval ? 0 : 1;
  let res = initailval ? initailval : arr[0];
  for (i = startIndex; i < this.length; i++) {
    // 我们如何给reduce传入回调函数还记得吗(pre, curval, index, arr)
    // 传入null会使得fn中的this指向window
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
};
