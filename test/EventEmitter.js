var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function(){
    console.log("监听器 listener1 执行");
}

var listener2 = function(){
    console.log("监听器 listener2 执行")
}

eventEmitter.addListener("connection",listener1);

eventEmitter.on("connection",listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "个监听器");

eventEmitter.emit("connection");

eventEmitter.removeListener("connection",listener1);
console.log("listener1 不在监听");

eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners +"个监听器");

console.log("执行完毕")