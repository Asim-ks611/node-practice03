const fs = require('node:fs');
const fsP = require('node:fs').promises;
const path = require('node:path');
const {format} = require('date-fns')
const {v4:uuid} = require('uuid')

const logEvents = async (msg)=>{
    const dateTime=`${format(new Date(),"yyyyMMdd\tHH:mm:ss")}`
    const logItem = `${dateTime}\t${uuid()}\t${msg}\n`
    console.log(logItem);
    try {
        await fsP.appendFile(path.join(__dirname,"files","eventLog.txt"),logItem)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = logEvents