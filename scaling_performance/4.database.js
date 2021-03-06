const http = require('http');
const {LocalStorage} = require('node-localstorage');

const db = new LocalStorage('./data')

let requests = 0

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        let requests = db.getItem('requests')
        db.setItem("requests",++requests)
        console.log(`${process.pid}: ${requests}`);
        res.end(JSON.stringify(requests))
    }
})
server.listen(3005,()=>{
    console.log(`http://127.0.0.1:3005`);
})