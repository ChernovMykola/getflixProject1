 const nodemailer = require('nodemailer')
  
 const transporter = nodemailer.createTransport(
    {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'netvibetest1@gmail.com',
            pass: 'NetVibeTest123'
        }
    },
        {
            from: 'Netvibe<netvibetest1@gmail.com>'
        }
    )

 const mailer = massage => {
    transporter.sendMail(massage, (err, info)  => {
        if(e){
            console.log('err')
            return;
        }else{
            console.log('Email sent' ,info);
        }
    })
 }

 module.exports = mailer