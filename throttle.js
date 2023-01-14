'use strict';
// 节流函数
// 单位时间内只用setInterval调用，单位时间内多次触发函数只有一个生效
// 场景：浏览器resize

const throttle = (handleEvent, wait) => {
  let preTime = +new Date();
  return function (...args) {
    const now = +new Date();
    if (now - preTime > wait) {
      preTime = now;
      handleEvent.apply(this, args);
    }
  };
};
function handleEvent() {
  console.log(this);
}
let wait = 1000;

// 对象调用
const obj = { name: 'wls' };
const objThrottle = throttle(handleEvent, 1000);
obj.objThrottle = objThrottle;
obj.objThrottle();
// 每隔0.5秒调用一次，但是事实上每隔一秒执行一次handleEvent
setInterval(
  throttle(() => {
    obj.objThrottle();
    // console.log(1)
  }, wait),
  500
);
