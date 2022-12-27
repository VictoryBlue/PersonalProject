# 组件的结构

### Timer 和 Records

Timer 组件用来生成数据（一个 Record），Records 组件用来展示记录。所以其实 Records 可以放在 Timer 里面，但是我还是想要放在 Timer 外面，因为 Records 组件其实是由 records 这个数据得来的，我更希望 records 这个数据作为全局数据，而不是 Timer 的专属数据。
毕竟万一以后 records 可以从浏览器缓存读取，那么放在 Timer 里其实是不太合适的。

# 数据流的改变

### Timer

作为类似 Navbar 的作用，可以增加 record，暂停与开始键可以改变 record，删除一条 record，清除所有 records

### records

records 里可以对具体某一条 record 进行修改

# 动态秒表的逻辑：

### 1.什么时候触发秒表？

当然是因为 state.isPause 变了，才会触发计时的要求，怎样监测变化的 state.isPause?当然使用 useEffect。

### 2.秒表怎么实现的？

如何实现秒针变化？秒针变化必然意味着 re-render，所以 state 改变了，我们改变这个 state 必然要用到 dispatch，所以逻辑写在 dispatch 里。每隔 1s 改变一次 state
