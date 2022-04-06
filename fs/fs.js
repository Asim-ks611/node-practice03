const path = require("node:path");
const os = require("node:os");
const { read } = require("node:fs");
const { appendFile } = require("node:fs/promises");


//// As readFile,writeFile and appendFile is async in nature here we use callback:

// const fs = require("node:fs");
// fs.writeFile("./files/test.txt", "Hello my Name is Asim \n", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Done writing");
//   fs.appendFile("./files/test.txt", "Hello Asim, my Name is Shah", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Done append");
//     fs.readFile("./files/test.txt", "utf8", (err, data) => {
//       if (err) {
//         return console.log(err.message);
//       }
//       console.log("Done Reading data is below 👇:");
//       console.log(data);
//       fs.rename("./files/test.txt", "newTest.txt", (err) => {
//         if (err) {
//           return console.log(err.message);
//         }
//         console.log("renamed the file");
//       });
//     });
//   });
// });

////// Lets avoid the callback hell
const fs = require("node:fs").promises;
const fileOperations = async () => {
    try {
        fs.writeFile('./files/promiseText.txt',"Asim Shah \n");
        await fs.appendFile('./files/promiseText.txt','Ryan Dahl')
        const data = await fs.readFile('./files/promiseText.txt',"utf8",data=>data)
        console.log(data);
        await fs.rename('./files/promiseText.txt','./files/newPromiseText.txt')
        // lets delete a file
        await fs.unlink('./files/test.txt')
    } catch (error) {
        console.log(error.message);
    }
}
fileOperations()