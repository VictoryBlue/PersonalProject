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
      this.event[event].forEach((e) => {
        e();
      });
    }
  }
}
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
