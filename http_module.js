const http=require('http');
const server=http.createServer((req,res)=>{
   if(req.url==='/'){
       res.write('using the root domain');
       res.end();
   }
   else{
       res.write('using some other domain');
       res.end();
   }
});

server.listen('3000');