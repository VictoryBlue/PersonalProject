let promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success');
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
// 1243

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
// 1

//第一个then和第二个then中传入的都不是函数，一个是数字类型，一个是对象类型，因此发生了透传，将resolve(1) 的值直接传到最后一个then里。
//其实你只要记住原则8：.then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。
Promise.resolve()
  .then(() => {
    return new Error('error!!!');
  })
  .then((res) => {
    console.log('then: ', res);
  })
  .catch((err) => {
    console.log('catch: ', err);
  });
//"then: " "Error: error!!!"

// ref: https://juejin.cn/post/6844904077537574919

// 手写promise
// Promise的reject方法和resolve方法是自有的，而不是被继承的，所以写在构造函数里面
function myPromise(constructor) {
  // 一定要用self保存this
  let self = this;
  this.value = undefined;
  this.reason = undefined;
  this.status = 'pending';
  // 不用self保存this，resolve中拿到的this值是指向global的
  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'fullfilled';
      self.value = value;
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.reason = reason;
    }
  }
  try {
    constructor(resolve, reject);
  } catch (e) {
    throw new Error(e.message);
  }
}

// Promise实例上有then方法可以被调用
myPromise.prototype.then = function (onFullfilled, onRejected) {
  const self = this;
  switch (self.status) {
    case 'fullfilled':
      onFullfilled(self.value);
      break;
    case 'rejected':
      onRejected(self.reason);
      break;
    default:
  }
};

// Promise.all
// 传入参数：可迭代对象，里面的item可以是promise对象，也可以不是
// 返回值是一个promise，如果所有的对象都被fullfilled，那么promise的值是各自结果对应的数组，否则进入then中触发rej的回调函数，或者被catch
function getBannerList() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('轮播数据');
    }, 300);
  });
}
function getStoreList() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('店铺数据');
    });
  });
}
function getCategoryList() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('分类数据');
      // reject('分类数据');
    });
  });
}

function initLoad() {
  Promise.all([
    getBannerList(),
    getStoreList(),
    getCategoryList(),
    'not Promise',
  ])
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
}
initLoad();

let fullfill = Promise.resolve('fullfill');
let reject = Promise.reject('reject');
let normal = 'normal';
Promise.allSettled([fullfill, reject, normal]).then((res) => {
  console.log(res);
});
