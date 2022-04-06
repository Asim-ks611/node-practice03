const {createReadStream,createWriteStream} = require('node:fs');
const { stdin } = require('node:process');
const { on } = require('node:stream');

const file = "./videoSample/OSI_explained.mp4" 
let readStream =createReadStream(file)
let writeStream = createWriteStream("./videoSample/copy.mp4")
let writeToFile = createWriteStream("./videoSample/hello.txt")


/*
 * In case of piping/pipe the flow of data will be automatically managed,
 *  so that the destination Writable stream is not overwhelmed by a faster Readable stream.
 * Means nochange of backPressure or even if it happens pipe method handle it by itself.
*/

console.time('TimeTaken')
readStream.pipe(writeStream)
.on("error",(err)=>{
    console.log(err);
})

readStream.on("end",()=>{
    console.timeEnd('TimeTaken')
})

stdin.pipe(writeToFile).on("error",(err)=>{
    console.log(err);
})

////==== -- NOTE -- ==== ////
/*
 * you can also pipe directly from terminal by typing : echo "hello world 3" | node 6pipe
 * Try this out
*/