var fs =  require("fs");
var data  =  fs.readFileSync("./holle.js"); //阻塞式的
console.log(data.toString());
console.log("程序结束")


fs.readFile("./holle.js",function(err,data){    //非阻塞的
    console.log(data.toString());
})
console.log("程序结束")