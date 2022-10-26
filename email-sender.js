// ( not work ?!! :)
// task -5- :

// create a file named email-sender  
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)
// Try to send your self email using this

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: 'smtp.mailtrap.io',
    // port: 2525,
    // tls:{
    //     rejectUnauthorized:false
    // },
    auth: {
    user: 'my.mail@gmail.com',
    pass: 'my.pass'
    }
});

const mailOptions = {
    from: 'my.mail@gmail.com',
    to: 'frend.mail@gmail.com' ,
    subject: 'Sending Email using Node.js (with package i nodemailer)',
    text: 'That was easy! (text)',
    // html : '<h1> You are welcome </h1> <p> new user</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
});

// they not work !??