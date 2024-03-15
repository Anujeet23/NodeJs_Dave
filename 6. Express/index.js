const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const add = (a, b) => {
  console.log(a + b);
};

add(2, 3);
//initialize the emitter
const myEmitter = new MyEmitter();

//add listen for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //Emit event
  myEmitter.emit("log", "Log Event emitted");
}, 2000);
