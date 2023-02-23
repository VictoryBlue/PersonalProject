// 发布订阅模式：
// 这个类里面有两个方法，emit，on。emit用来发出一个事件，发出事件后执行这个事件对应的所有的回调
// on用来增加对应事件一个回调。
// 场景：消息推送？
class EventEmitter {
  constructor() {
    this.event = {};
  }
  on(event, fn) {
    if (event in this.event) {
      this.event[event].push(fn);
    } else {
      this.event[event] = [fn];
    }
  }
  emit(event) {
    if (event in this.event) {
      this.event[event].forEach((callback) => {
        callback();
      });
    }
    
  }
}
// 有一些错误比较隐蔽
// this.event[event]是数组， for (var e in this.event[event])拿到的e是索引
function test() {
  let sign1 = 0;
  let sign2 = 0;
  const emitter = new EventEmitter();
  emitter.on('add', function () {
    sign1++;
  });
  emitter.emit('add');
  emitter.on('add', function () {
    sign2++;
  });
  emitter.emit('add');
  const judge = sign1 === 2 && sign2 === 1;
  console.log(judge);
  return judge;
}
test();
