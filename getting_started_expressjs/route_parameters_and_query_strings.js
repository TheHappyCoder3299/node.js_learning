const express=require(`express`);
const app=express();
app.get('/example/:name/:age',(req,res)=>{
    res.send(req.params.name+" : "+req.params.age);
    console.log(req.query);
});
app.listen(3000);