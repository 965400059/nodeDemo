var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('holle world')
}).listen(9527);

console.log('server running at http://127.0.0.1:9527');