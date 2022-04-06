const events = require('node:events');
const logEvents = require('./logEvents')

// class MyEmitter extends events{} then => const myEmitter = new MyEmitter() OR
// const myEmitter = new events.EventEmitter()

// lets initialise object

// const myEmitter = new events.EventEmitter()

// //lets add listener for our logevents

// myEmitter.on('log',(msg)=>logEvents(msg))


// setTimeout(()=>{
//     myEmitter.emit('log',"log event emitted!")
// },3000)

// Instantiate an EventEmitter object
const eventEmitter = new events.EventEmitter();
  
// Handler associated with the event
const connectHandler = function connected() {
    console.log('Connection established.');
  
    // Trigger the corresponding event
    eventEmitter.emit('data_received');
}
  
// Binds the event with handler
eventEmitter.on('connection', connectHandler);
  
// Binds the data received
eventEmitter.on(
    'data_received', function () {
        console.log('Data Transfer Successful.');
    });
  
// Trigger the connection event
eventEmitter.emit('connection');
  
console.log("Finish");
