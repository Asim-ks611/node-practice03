const fs = require("node:fs");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/video", (req, res) => {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("<h1>REQUIRES RANGE HEADER</h1>");
    }
    const videoPath = "Express-Handlebars.mp4"; // Video in current directory
    const videoSize = fs.statSync(videoPath).size;
    const CHUNK_SIZE = 10**6;
    const start = Number(range.replace(/\D/g,""))
    const end = Math.min(start + CHUNK_SIZE,videoSize-1)
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers); //206 is for partial content
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server is Running At http://localhost:${PORT}`);
});
