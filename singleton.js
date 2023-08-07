// 确保一个类在任何一个情况下只有一个实例，而且实例允许全局获取
// 比如说任务管理器窗口，你肯定不希望创建多个任务管理器窗口，因为同一个任务管理器窗口有的界面应该是一致的
// 那么这就可以用到单例模式
// 具体到前端，那么store就应该是体现单例模式的思想了【全局状态管理，全局唯一实例】。vuex/redux/mobx
var singleton = (function(){
  var instance;
  function Instance(){

  }
  return function(){
    if (!instance) instance = new Instance()
    return instance
  }
})()
let s1 = singleton()
let s2  = singleton()
console.log(a1===a2)