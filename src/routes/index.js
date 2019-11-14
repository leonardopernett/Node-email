const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')


router.post('/send-email', async (req,res)=> {
    
    const {name, email, phone, message} = req.body ;

    contentHTML = `
       <h1>User Information</h1>
       <ul>
         <li>Username: ${name} </li>
         <li>Email: ${email} </li>
         <li>phone: ${phone} </li>
       </ul>
       <p> ${message} </p>
    ` 
    let transporter =  nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth: {
            user:'pernettleonardo@gmail.com',
            pass: 'aqui va el password*'
        }
    })

  const info = await transporter.sendMail({

        from:'servidor enviado <pernettleonardo@hotmail.com>',
        to:'pernettleonardo@gmail.com',
        subject: 'website contact form',
        html:contentHTML
    })


    console.log("mensaje send", info.messageId);
    res.redirect('/success.html')
    r
})



module.exports= router