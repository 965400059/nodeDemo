var socket;
var $ = function () {
     return document.getElementById(arguments[0]);
}
var log = function (msg) {
     $("log").innerHTML ? $("log").innerHTML += "<br />" + msg : $("log").innerHTML = msg;
}
var initWebSocket = function () {
     if (window.WebSocket) {
          socket = new WebSocket("ws://127.0.0.1:8080/websocket");
          socket.onmessage = function (event) {
               var json = JSON.parse(event.data);
               document.getElementById("message").value = json.message;
          };
          socket.onopen = function (event) {
               log("Web Socket opened!");
          };
          socket.onclose = function (event) {
               log("Web Socket closed.");
          };
          socket.onerror = function (event) {
               log("Web Socket error.");
          };
     } else {
          log("Your browser does not support Web Socket.");
     }
}
var send = function () {
     var data = function () {
          socket.send("{'send':1,'take':2,'message':" + Math.random() + "}");
     };
     if (socket.readyState !== 1) {
          socket.close();
          initWebSocket();
          setTimeout(function () {
               data();
          }, 250);
     } else {
          data();
     };

}
window.onload = function () {
     initWebSocket();
}