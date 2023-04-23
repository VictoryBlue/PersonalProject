// Object.freeze
// 可以冻结一个对象，一个被冻结的对象再也不能被修改：
// 不能增、删对象的属性，不能修改对象的原型
// 是浅冻结，冻结的对象的属性如果是一个对象，仍然可以修改。
Object.myFreeze = function (obj) {
  if (obj instanceof Object) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        Object.defineProperty(obj, key, {
          writable: false,
        });
      }
    }
    // 不能添加新的属性，已有属性不可删除【不可配置】
    Object.seal(obj);
  }
};
// 上述写法有一个缺陷，Symbol属性是不冻结的

Object.myFreeze = function (obj) {
  if (obj instanceof Object) {
    const property = Object.getOwnPropertyNames(obj);
    const Symbols = Object.getOwnPropertySymbols(obj);
    [...property, ...Symbols].forEach((key) => {
      Object.defineProperty(obj, key, {
        writable: false,
      });
    });
    // 不能添加新的属性，已有属性不可删除【不可配置】
    Object.seal(obj);
  }
};
