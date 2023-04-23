//直接绑定，会产生循环引用，发生爆栈。
//没有深刻理解到
Object.keys(person).map((item) => {
  Object.defineProperty(person, item, {
    get: function () {
      return person[item];
    },
    set: function (value) {
      if (value !== person[item]) {
        person[item] = value;
      }
    },
  });
});
// 把value当成是一个左值，而不是右值
// getter，setter函数里
Object.keys(person).map((item) => {
  observeObj(person, item, person[item]);
});
function observeObj(obj, key, value) {
  Object.defineProperty(obj, key, {
    get: function () {
      return value;
    },
    set: function (newValue) {
      if (newValue !== value) {
        value = newValue;
        _render(ul);
      }
    },
  });
}
