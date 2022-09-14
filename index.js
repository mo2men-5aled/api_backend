//include the event module in my project
var event = require("events");

var eventEmitter = new event.EventEmitter();

//var eventHandler = function(){console.log("iheard screaming")}
//and eventHandler will passed as a parameter to the function

// "eventEmitter.on" makes the function wait for the event to be fired and it'll be when it fire
eventEmitter.on("scream", function () {
  console.log("i heard a screaming");
});

//emit fires an event
eventEmitter.emit("scream");
