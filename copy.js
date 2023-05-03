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
// 问题在于拷贝的对象的属性里，有一个属性指向对象本身，那么在原来的深拷贝过程中会不断的复制那个对象，直到空间不够用。
const _completeDeepClone = (target, map = new Map()) => {
  // 补全代码
  if (typeof target !== 'object' || target === null) return target;

  if (map.get(target)) return target;
  map.set(target, true);
  let copy = {};
  if (target instanceof Array) copy = [];
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      copy[key] = _completeDeepClone(target[key], map);
    }
  }
  return copy;
};
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
