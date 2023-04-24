// 通过_proxy访问object，prototypes里存放不想让外界访问的数据。
const _proxy = (object, ...prototypes) => {
  // 补全代码
  return new Proxy(object, {
    get: function (target, prop) {
      if (prototypes.includes(prop)) return 'noright';
      else return target[prop];
    },
  });
};
