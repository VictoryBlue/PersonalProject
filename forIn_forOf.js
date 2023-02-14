let obj = {
  name: 'poetry',
  age: 22,
  [Symbol('aa')]: 100,
  0: 200,
  1: 300,
};
for (let key in obj) {
  console.log(obj[key]);
}
// 200;
// 300;
// poetry;
// 22;

// for in:
// 只遍历可枚举属性
// 不遍历symbol
// 数字优先