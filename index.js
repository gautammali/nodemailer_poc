const express=require("express");
const app=express();
const {mailService}=require("./controllers/mail");

app.get("/",(req,res)=>{
    mailService("gautammali676@gmail.com")
    res.send("yes listing");
});


app.listen(process.env.PORT || 3050,()=>{
    console.log("server start");
});