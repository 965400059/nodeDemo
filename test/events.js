var events = require("events");
var eventEmitter = new events.EventEmitter();

var connected = function(){
    console.log('连接成功')
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connected);

eventEmitter.on('data_received',function(){
    console.log('数据接收成功');
})

eventEmitter.emit("connection");

console.log("执行完成")