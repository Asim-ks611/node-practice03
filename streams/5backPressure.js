const {createReadStream,createWriteStream} = require('fs');

const file = "./videoSample/OSI_explained.mp4" //SocialMediaApp.mp4

/*
 * BACK-PRESSURE : sometimes the data from readstream is so fast for writeable stream to handle.
 * To tackle backpressure we need to pass highWaterMark option to stream's constructor.
 * At backPressure we paused readStream and drain of writable we resume it.
 * It also make the process to use less memory. 
 */

let readStream =createReadStream(file)
let writeStream = createWriteStream("./videoSample/copied.mp4",
// {
//     highWaterMark:160000
// }
)

console.time("timeTaken");
readStream.on('data',(chunk)=>{
    let isFull = writeStream.write(chunk)
    //// here if writeStream gives boolean true value, means it experienced backPressure.
    if(isFull){
        console.log('back pressure');
        readStream.pause()
    }
})
readStream.on("error",(err)=>{
  console.log(err.message);
})

readStream.on("end",()=>{
    writeStream.end()
    console.timeEnd("timeTaken");
})

//// we have drain event to deal with backPressure
readStream.on("drain",()=>{
    console.log('drain')
    readStream.resume()
})

writeStream.on("close",()=>process.stdout.write("file copied"))
