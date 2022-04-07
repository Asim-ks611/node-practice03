const {fork,exec,spawn,} = require('node:child_process');

// child_process.fork('Path of the module to run in the child',[List of string arguments],[options])
// Fork() is a special case of spawn()
// Keep in mind that fork() spawned Node.js child processes are independent of the parent main process.
// Each process has its own memory, with their own V8 instances.
// Which means it consume resources, spawning a large number of child processes is not recommended.

const processes = [
    fork('./server.js',[3001]),
    fork('./server.js',[3002]),
    fork('./server.js',[3003])
]

console.log(`forked ${processes.length} processes`);
