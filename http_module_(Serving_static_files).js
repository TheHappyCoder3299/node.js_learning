const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    const readStream=fs.createReadStream('C:/Users/anwit/Desktop/WebDev/Fullmotion/index.html');
    res.writeHead(200,{'Content-type':'text/html'});
    readStream.pipe(res);
}).listen(3000);