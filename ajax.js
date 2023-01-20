// 基于promise封装ajax
// ajax——Asynchronous Javascript And XML，是一种用来和服务器通信的方式，可以接受和发送多种文件形式包括JSON,XML,HTML等。ajax最吸引人的特性是可以与服务端通信，更新页面数据，但是不需要刷新整个页面(https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
// 既然是通信那必然是有来有回的，发请求用open，处理服务器返回响应的回调函数写在xhr.onreadystatechange——readystatechange事件发生，执行这个回调函数
// xhr.open的第一个参数接受各种方法:get,post,head,或者服务器支持的其他方法，第二个参数url发送同源请求，如需跨源，需要配合服务端解决跨域问题。跨域exp:[https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)【另，fetch方法默认也是同源的，也就是说需要服务器配置跨域】
function ajax(url, method) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // 设置请求方法和请求地址，这个时候请求还没有发,只是建立连接【联想socket.connet】
    xhr.open(method, url, true);
    // 服务器下线，网络失败,跨域等触发onerror
    // onload 会被触发，哪怕http的错误状态码也能返回
    xhr.onerror = function () {
      reject('请求数据失败');
    };

    xhr.onreadystatechange = function () {
      // readyState为4:请求已完成，响应已经就绪
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(xhr.statusText));
        }
      }
    };
    // 发请求
    xhr.send(null);
  });
}

// 补充readyState：
// 1 .返回一个整数，表示实例对象的当前状态，该属性只读。
// 2 .0 表示XMLHttprequest实例已经生成，但是实例的open方法没有被调用
// 3 .1 表示open方法已经调用，可以使用实例的setRequestHeader()方法设置HTTP请求头信息。此时send方法还没调用————连接已经建立
// 4 .2 表示实例的send方法已经调用，并且服务器返回的头信息和状态码已经收到————请求已经接收
// 5 .3 表示正在接收服务器传来的数据体body部分。这时，如果实例的responseType属性等于text或者空字符串，responseText属性就会包含已经收到的部分信息————请求处理中
// 6 .4 请求已经完成，2xx 3xx 4xx 5xx都被认为是请求已完成
// 7 .通信过程中，每当实例对象发生状态变化，他的readyState属性就会改变，这个值每一次变化，都会触发readyStateChange事件

// ref:https://www.jianshu.com/p/536aea258b7f
// 实例ref:https://blog.csdn.net/weixin_42448623/article/details/107529287
// ajaxMdn ref:https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started

// onload&onerror ref:https://stackoverflow.com/questions/10584318/when-should-xmlhttprequests-onerror-handler-fire
