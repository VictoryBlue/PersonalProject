Array.prototype._filter = function (f) {
  const ans = [];
  for (i = 0; i < this.length; i++) {
    if (f(this[i])) {
      ans.push(this[i]);
    }
  }
  return ans;
};


Array.prototype._filter = function (f) {
  const ans = [];
  for (const i of this) {
    if (f(i)) {
      ans.push(i);
    }
  }
  return ans;
};
