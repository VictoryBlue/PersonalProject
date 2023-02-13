Array.prototype._map = function (f) {
  ans = [];
  for (let i in this) {
    ans.push(f(this[i]));
  }
  return ans;
};
a = [1, 2, 3]._map((i) => i * 2);
console.log(a); //[ 2, 4, 6, NaN ]
// 错误原因，for in 不止会遍历数组的索引，还遍历了添加的方法
// 所以应该写 for of 只遍历数组的元素

Array.prototype._map = function (f) {
  ans = [];
  for (i = 0; i < this.length; i++) {
    ans.push(f(this[i]));
  }
  return ans;
};
a = [1, 2, 3]._map((i) => i * 2);
console.log(a); //[ 2, 4, 6 ]
