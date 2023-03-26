function flat(arr) {
  let res = [];
  for (let i of arr) {
    if (i instanceof Array) {
      res.push(...flat(i));
    } else {
      res.push(i);
    }
  }

  return res;
}
var test = flat([1, 2, 3, [1, 2, 3, [1, 2]]]);
console.log(test)