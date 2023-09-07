const fs = require('fs')
const http = require('http')
const url = require('url')
// 异步
// fs.readFile() 
// 同步
// fs.readFileSync()

const server =  http.createServer((req,res)=>{
  const {query, pathname} = url.parse(req.url,true)
  console.log(query, pathname, query.id)
  if (req.url === '/overview'){
    res.end("this is overview")
  }else if(req.url === '/product'){
    res.end('this is product (｡ì _ í｡)')
  }else if(req.url=='/margin'){
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('./testFlex.html',(err, data)=>{
      res.end(data)
    })
   

  }
  else{
    res.writeHead(404,{
      'Content-Type':'text/html',
      'my-own-header': 'hello'
    })
    res.end('<h1>page not found---</h1>')
  }
})

server.listen(8000,'127.0.0.1',()=>{
  console.log('listen to port 8000 ')
})