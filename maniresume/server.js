const express= require('express');
const app=express();
app.get('/',function(req,res){
    res.sendFile("public/index.html",{root:__dirname});
});
app.listen(7000,function(req,res){
console.log("server is running");
});