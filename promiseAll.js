Promise.all([])

function PromiseAll(arr){
  let result = []
  let count = 0
  return new Promise((resolve, reject)=>{
    
    for (let i in arr) {
      new Promise((solve,reject)=>{
        solve(arr[i])
      }).then((res)=>{
        result[i] = res
        count += 1
        if (count === arr.length){
          resolve(result)
        }
      },(e)=>{
        
        reject(e)
      })
    }
  })
}

const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`)
    }, t)
  })
}

// Resolving a normal promise.
timeOut(1000)
 .then(result => console.log(result)) // Completed in 1000

// Promise.all
PromiseAll([timeOut(1000), timeOut(2000)])
 .then(result => console.log(result)) // ["Completed in 1000", "Completed in 2000"]

PromiseAll([1, Promise.reject(2)])
 .then(result => console.log(result)) // ["Completed in 1000", "Completed in 2000"]

