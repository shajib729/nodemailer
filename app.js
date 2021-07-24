require('dotenv').config()
const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const mailGun = require('nodemailer-mailgun-transport');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(bodyParser.json())

app.post('/contact',async (req, res) => {
    console.log(req.body);
    let data = req.body

    // These 4 steps are for send message from website to gmail
    
    // step : 1
    const auth = {
        auth: {
            api_key: process.env.api_key,
            domain: process.env.domain
        }
    }

    // step : 2 
    let transporter = nodemailer.createTransport(mailGun(auth))
    
    //step : 3
    const mailOptions = {
        from: `Exited User ${data.email}`, // sender address
        to: "sajidislam729@gmail.com", // list of receivers
        subject: `Message from ${data.name}`, // Subject line
        text: `
                Name : ${data.name}

                Email : ${data.email}

                Subject : ${data.subject}

                Message : ${data.message}
    
            `
    }

    // step : 4 
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.status(400).json({error:err.message});
            console.log('Error',err);
        } else {
            res.status(200).json({message:'Message Sent Successfully !'});
            console.log('Message Sent !');
        }
    })
    
})

// 3: setup in heroku 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("my-app/build"))
}


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})