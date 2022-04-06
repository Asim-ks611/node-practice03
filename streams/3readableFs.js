const fs = require('fs');
const { stdin } = require('process');
const file = "./videoSample/OSI_explained.mp4"

const readStream = fs.createReadStream(file)  //gives promise with events handling

readStream.on("data",(chunk)=>{
    console.log("size:",chunk.length);
})
readStream.on("end",()=>console.log("Read stream ended"))

readStream.on("error",(err)=>console.log(err))

readStream.pause() // paused streaming

stdin.on("data",(data)=>{
    if(data.toString().trim()==="paused"){  // asking is stream pause return boolean
        console.log(readStream.isPaused());
    }
    if(data.toString().trim()==="read"){ //asking to read chunk by chunk
        console.log(readStream.read());
    }
    if(data.toString().trim()==="complete"){ // asking to read completely
        console.log(readStream.resume());
    }
})































