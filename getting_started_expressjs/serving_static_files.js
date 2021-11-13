const express=require('express');
const app=express();
const path=require('path');

// app.use('/public',express.static(path.join(__dirname)));

app.get('/example',(req,res)=>{
    res.sendFile(path.join('C:/Users/anwit/Desktop/WebDev/Puzzle_Game/FacePuzzle/','index.html'));
}).listen(3000);


