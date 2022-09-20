'use strict'
const nodemailer = require("nodemailer");
const _config = require('dotenv').config();


const mailService=async (emailId)=>{
    try {
        console.log(process.env.HOST);
        const transporter = nodemailer.createTransport({
            host:process.env.HOSTSERVICE,
            port:process.env.HOSTPORT,
            secure:false,
            auth: {
                user:process.env.HOST,
                pass: process.env.HOSTID
            }
        });
        let info=await transporter.sendMail({
            from: process.env.HOST,
            to:emailId,
            subject :"hello test mail",
            text: "test email from nodemailer" ,
            html:"<body><h1>hey there!</h1><p>thank you for shopping with snapBuy we will give you more and more Discount </p></body>"
        })
    
        console.log("message send",info.messageId);
        console.log("detail",nodemailer.getTestMessageUrl(info));
        
    } catch (error) {
       console.log("err",error); 
    }
   
}


module.exports={mailService};
