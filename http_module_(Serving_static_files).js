const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    const readStream=fs.createReadStream('C:/Users/anwit/Desktop/Game_Studio/Pong/Pong_Game.html');
    res.writeHead(200,{'Content-type':'text/html'});
    readStream.pipe(res);//res is also a writeStream
}).listen(3000);