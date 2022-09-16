'use strict'
const nodemailer=require("nodemailer");

const mailService=async (emailId)=>{
    try {
        const authAcc = await nodemailer.createTestAccount();
    
        console.log(authAcc);
        const transporter = nodemailer.createTransport({
            host:"smtp.ethereal.email",
            // host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth: {
                user:authAcc.user,
                pass: authAcc.pass
            }
        });
        let info=await transporter.sendMail({
            from:"gautammali@yopmail.com",
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
