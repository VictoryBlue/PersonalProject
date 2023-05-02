// setTimeout
function sleep(fn, time) {
  setTimeout(() => {
    fn();
  }, time);
}
var f1 = function () {
  console.log('sleep 1s');
};
var f2 = function () {
  console.log('sleep 2s');
};
// sleep(f1, 1000);
// sleep(f2, 2000);

// Promise 封装解决同步阻塞问题
function PromiseSleep(fn, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, time);
  });
}
// PromiseSleep(f1, 1000).then(() => {
//   PromiseSleep(f2, 3000);
// });
// 但是这种写法要往PromiseSleep中传入fn
function PromiseSleep1(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
// PromiseSleep1(1000).then(f1);
// PromiseSleep1(2000).then(f2);

// 同步阻塞
async function synBlock(fns, times) {
  if (fns.length !== times.length) return false;
  for (let i = 0; i < fns.length; i++) {
    fns[i]();
    await PromiseSleep1(times[i]);
  }
}
// synBlock([f1, f1], [1000, 1000]);
