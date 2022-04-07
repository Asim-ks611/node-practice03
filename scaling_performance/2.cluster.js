// As nodejs uses sigle thread, so it uses a single processor for a single instance.
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');

////lets check no of cpus of our system:
// console.log(numCPUs);  // 4 main 4 virtual.


if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
    // Forking workers upto no. cores or thread .
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
    cluster.on('exit', (worker) => {
      console.log(`worker ${worker.process.pid} died`);
      //// loging no. of workers left
      console.log("Workers left: "+Object.keys(cluster.workers).length);
      //// as worker process dies lets create a new worker process
      cluster.fork()
      //// lagain checking the no. of workers left
      console.log("Workers left: "+Object.keys(cluster.workers).length);
    });
  } else {
    // Workers can share any TCP connection
    // Creating an HTTP server
    http.createServer((req, res) => {
      res.writeHead(200);
      res.end('Current Worker : '+process.pid);
      if(req.url ==="/kill"){
        /// killing the current worker process
        process.exit()
      }else{
        console.log('serving from'+process.pid);
      }
    }).listen(8000);
    console.log(`Worker ${process.pid} started`);
  }
  
  
  
//  console.log(cluster); => 
/**
 EventEmitter {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  isWorker: false,
  isMaster: true,
  isPrimary: true,
  Worker: [Function: Worker],
  workers: {},  //// we use this to check worker lefts after killing one worker process
  settings: {},
  SCHED_NONE: 1,
  SCHED_RR: 2,
  schedulingPolicy: 1,
  setupPrimary: [Function (anonymous)],
  setupMaster: [Function (anonymous)],
  fork: [Function (anonymous)],
  disconnect: [Function (anonymous)],
  [Symbol(kCapture)]: false
}
 */



