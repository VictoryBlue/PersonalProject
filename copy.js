// 浅拷贝
function clone(target) {
  let cloneTarget = {};
  for (const key in target) {
    cloneTarget[key] = target[key];
  }
  return cloneTarget;
}

// deepClone
function clone(target) {
  if (typeof target === 'object') {
    let cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else return target;
}
// 考虑数组
function clone(target) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else return target;
}
function deepclone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let newobj = {};
  if (obj instanceof Array) {
    newobj = [];
  }

  for (let key in obj) {
    // 只拷贝这个对象本身的属性，不拷贝原型链上的属性
    if (obj.hasOwnProperty(key)) newobj[key] = deepclone(obj[key]);
  }
  return newobj;
}
// 循环引用

// test
const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },
  field4: [2, 4, 8],
};
console.log('clone(target)', clone(target));
// ref:https://juejin.cn/post/6844903929705136141
