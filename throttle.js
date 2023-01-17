'use strict';
// 节流函数
// 一定的时间内只触发一次回调函数
// 设置setInterval每隔小于wait的时间调用，单位时间内【wait】多次触发函数只有一个生效
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

