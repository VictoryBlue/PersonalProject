const fs = require('fs');
const server = require('http').createServer()
// fs.writeFileSync('./text-file.txt','Hello world!\n'.repeat(500000),()=>{
// })
server.on('request', (req, res) => {
  // fs.readFile('./text-file.txt', (err, data) => {
  //   if (err) {console.log(err);}
  //   res.end(data)
  // })

  // solution2 stream
  // const readable = fs.ReadStream('./text-file.txt')

  // readable.on('data',chunk=>res.write(chunk))
  // readable.on('end', () =>{
  //   res.end()
  // })
  const readable = fs.ReadStream('./text-file.txt')
  readable.pipe(res)
})

server.listen(8000,"127.0.0.1",()=>{
  console.log("Server running on port 8000")
})