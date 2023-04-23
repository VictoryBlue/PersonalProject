function curried(fn){
  let args = []
  if (fn.length >= args.length) return fn.apply(this, [args])
  return function f (arg){
    args.push(arg)
    return f
  }
}
// 函数有一个属性叫做length