/// NORMAL BUFFER METHOD

const fs = require('fs')
const http = require("http")

const file = "./videoSample/OSI_explained.mp4"

const server = http.createServer((req,res)=>{
    fs.readFile(file,(err,data)=>{
        if(err){
            console.log("error :",error.message);
        }
        res.writeHeader(200,{"content-type":"video/mp4"})
        res.end(data)
    })

})


server.listen(3000,()=>{
   console.log("Server at http://localhost:3000");
})