const http = require('http');
const port = parseInt(process.argv[2]|| "3000")

const msg = [
    "Hello 1",
    "Hello 2",
    "Hello 3",
    "Hello 4",
    "Hello 5",
]

const server = http.createServer()

server.on("request",(req,res)=>{
    const randomIndex = Math.floor(Math.random()*msg.length)
    const payload = JSON.stringify({
        port,
        processID:process.pid,
        advice:msg[randomIndex]
    })
    res.writeHead(200,{"content-type":"application/json"})
    res.end(payload)
})

server.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})