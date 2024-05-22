const express =require('express');
const app=express();
app.get("/",(req,res)=>{
    res.status(200).send("landing page");
    console.log('come to page');
})


app.listen(3040);