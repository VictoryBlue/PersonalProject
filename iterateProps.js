function iterate(obj) {
  let Symbols = Object.getOwnPropertySymbols(obj);
  let iterProps = Object.getOwnPropertyNames(obj);
  let arr = [...Symbols, ...iterProps];
  return arr.map((key) => `${key}: ${obj[key]}`);
}
// getOwnPropertySymbols
// getOwnPropertyNames
// 这两个属性互斥，getOwnPropertyNames拿不到Symbols属性