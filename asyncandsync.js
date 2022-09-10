const fs = require("fs");
// const http = require("http");


// fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

try{
    const data = fs.readFileSync(__dirname+"/hello.txt","utf8");
    console.log(data);
}
catch(e){
    console.log(e);
}

console.log("Line end here");