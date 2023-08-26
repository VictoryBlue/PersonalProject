function curried(fn){
  let args = []
  return function f (...arg){
    args.push(...arg)
    if (fn.length <= args.length) {
      return fn.apply(this, args)
    }
    return f
  }
}
// 函数有一个属性叫做length
function sum(a,b,c,d){
  return a + b + c + d
}
const sum_ = curried(sum)
console.log(sum_(1)(2)(3)(4))
