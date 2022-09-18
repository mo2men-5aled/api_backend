const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("response", () => {
  console.log("i recieved the event");
});

eventEmitter.emit("response");
