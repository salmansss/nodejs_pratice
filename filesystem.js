const fs = require("fs");
const http = require("http");

const server = http.createServer(function(req,res){
fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
    
    
    res.writeHead(200,{"content-type":"text/plain"})
    res.write(data);
    res.end();
});

}).listen(3000,()=> console.log("Server Start on port 3000"));
// for delete file

// fs.unlink(__dirname+"/hello1.txt",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });