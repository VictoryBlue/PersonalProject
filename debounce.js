// 防抖函数：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时
// 场景：因为用户可能会短时间[wait]内重复点击某一个button，这样会对服务器进行多次提交，【提交表单场景，搜索框联想场景】
// 因此衍生防抖函数：wait时间内重复触发函数，则重新计时,wait时间内没有再次触发：

// 如何调用？element.addEventListener('click', debounce(handleEvent),wait)
// 写在对象里的调用方法：

// objDebounce = debounce(handleEvent, wait);
// obj = {
//   debounce: objDebounce,
// };
// obj.debounce()
const handleEvent = () => {}; // 比如说发请求
let wait = 50;

function debounce(handleEvent, wait) {
  let timer = 0;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      handleEvent.apply(this, args);
    }, wait);
  };
}

window.addEventListener('click', debounce(handleEvent, wait));
