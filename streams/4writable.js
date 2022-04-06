const {createReadStream,createWriteStream} = require('fs');

const file = "./videoSample/OSI_explained.mp4"
/*
 * So as readStream read a file writeStream write a file lets read and write a file using streams.
 */
/*
 * BACK-PRESSURE : sometimes the data from readstream is so fast for writeable stream to handle.
 * To tackle backpressure to need to pass highWaterMark option to stream's constructor.
 */
let readStream =createReadStream(file)
let writeStream = createWriteStream("./videoSample/copied.mp4")

readStream.on('data',(chunk)=>{
    writeStream.write(chunk)
})
readStream.on("error",(err)=>{
  console.log(err.message);
})

readStream.on("end",()=>{
    writeStream.end()
})

writeStream.on("close",()=>{
    process.stdout.write("file copied")
})