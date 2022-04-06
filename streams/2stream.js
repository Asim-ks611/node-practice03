const fs = require('fs')
const http = require("http")

const file = "./videoSample/OSI_explained.mp4"

const server = http.createServer((req,res)=>{
    res.writeHeader(200,{"content-type":"video/mp4"})
    fs.createReadStream(file)
    .pipe(res)
    .on("error",()=>{console.log(new Error("something went wrong"))})
})


server.listen(3000,()=>{
   console.log("Server at http://localhost:3000");
})