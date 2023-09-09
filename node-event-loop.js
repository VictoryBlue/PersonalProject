const fs = require('fs');
// console.log 随机
setTimeout(()=>{
  console.log('Hello World!');
},0)

setImmediate(()=>{
  console.log('Imediately');
})

fs.readFile(`${__dirname}/new.js`,(err, data)=>{
  console.log('IO finished')
})
