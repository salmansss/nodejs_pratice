// http_module predefine module
// nodemon installation next video
const http = require("http");

const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>Node js pratice </h1>");
    
res.end();
}).listen(3000,()=> console.log("Server Start on port 3000"));