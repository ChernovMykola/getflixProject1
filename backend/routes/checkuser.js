const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const controller = require('../controllers/checkuser')
const jwt = require('jsonwebtoken')
JWT_SECRET = "Itissecrettoken"
const User = require('../models/user')
const status = require('statuses')
const nodemailer = require('nodemailer')
// const env = require('env-cmd')
const env = require('dotenv').config();

router.post('/login', controller.login)

router.post('/register', controller.register)

router.post('/forgotpassword', async (req, res)=>{
    // const { email } = req.body.email;
    try {
        const oldUser = await User.findOne({email: req.body.email});
        if(!oldUser){
            return res.json({status:'User not exist'})
        }
        const secret =  JWT_SECRET + oldUser.password 
        const tokenPass = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn:'12m'})
        const link = `${process.env.FRONTEND_URL}/change_password/${oldUser._id}/${tokenPass}`;
        const transporter = nodemailer.createTransport(
            {
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'netvibetest1@gmail.com',
                    pass: 'fhqrywdpwwylddyj'
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
         const message = {
            from: 'netvibetest1@gmail.com',
            to: oldUser.email,
            subject: 'Change the password',
            text: `You can go here and change the password: ${link}`
        }
        mailer(message)
        console.log(link);
        res.send(`${process.env.FRONTEND_URL}/change_password/${oldUser._id}/${tokenPass}`)
    } catch (error) {
        
    }
})


router.get("/reset-password/:id/:tokenPass", async(req, res) => {
    const {id, tokenPass} = req.params;
    console.log(req.params);
    const oldUser = await User.findOne({_id: id });
    if(!oldUser){
        return res.json({status:'User not exist'})
    }
    const secret =  JWT_SECRET + oldUser.password 
    try {
        const verify = jwt.verify(tokenPass, secret)
        res.render("NewPasswordPage",({email:oldUser.email}))
    } catch (error) {
        res.send('Not verify')
    }
    res.send('Done') 
})

router.post("/reset-password/:id/:tokenPass", async(req, res) => {
    const {id, tokenPass} = req.params;
    const  {newpassword} = req.body.newpassword;
    const {confirmNewPassword} = req.body.confirmNewPassword;
    if(newpassword == confirmNewPassword){
        if(!oldUser){
            return res.json({status:'User not exist'})
        }
        const secret =  JWT_SECRET + oldUser.password 
        try {
            const verify = jwt.verify(tokenPass, secret)
            const newPassword = await bcrypt.hash(newpassword,10);
            await User.updateOne({
                _id:id 
            },
            {
                $set: {
                    password: newPassword,
                }, 
            })
            res.json({status: 'Password update!'})
            // res.render("NewPasswordPage",({email:oldUser.email}))
        } catch (error) {
            res.send('Not verify') 
        }
        res.send('Done') 
    }
    
})
// router.post('/restpass', controller.restpass)
// // router.post('/newpassword', controller.newpass)
// router.get('/restpass/:id/:tokenPass', controller.newPass)

module.exports = router