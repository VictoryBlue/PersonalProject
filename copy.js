// 浅拷贝
function clone(target) {
    let cloneTarget = {};
    for (const key in target) {
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
};


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

function clone(target) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else return target;
}
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
