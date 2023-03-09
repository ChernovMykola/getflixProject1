const bcrypt = require('bcryptjs')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const mailer =  require('../nodemaler')
const { link } = require('fs')
// const express = require('express');
// const app = express();


module.exports.login = async function(req, res)  {
    const { email, password } = req.body;

console.log(email)
console.log(password)
     const candidate = await User.findOne({email: req.body.email})
     console.log(candidate)
     if(candidate){
        console.log(`candidate: ${candidate}  I am inside the if`)
        //we find user in db and start to verify password
         const passRes = bcrypt.compareSync(req.body.password,  candidate.password)
         console.log(`passRes: ${passRes}`)
         if(passRes){
            console.log(`passRes: ${passRes}  I am inside the if`)
            //generate JWT
            const token = jwt.sign({
                email: candidate.email,
                id: candidate._id
            }, 'keys.jwt', {expiresIn: 60 * 60})
 
            res.status(200).json({
                token: `Bearer ${token}`
            })
         }else{
            //password is not correcrly
             /*res.status(404).json({
                massage: "Check your password, please!"
            })*/
            res.status(404).json({ error: error.message, message: 'Check your password' });
         }
     }else{
        //we dont find user in db
        res.status(401).json({
            massage: "Check your email, please!"
        })
     }
}

module.exports.register = async function(req, res){
    
    const candidate = await User.findOne({email: req.body.email})
    const password = req.body.password
    const passwordconf = req.body.passwordconf

    if(candidate){
        res.status(409).json({
            massage: "Change your email, please!"
        })
    }else if(password == passwordconf){
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)})
        
        try{
            await user.save()
            res.status(201).json({
                massage: "User has been created!"
            })
        }catch(e){
            console.log('e')
        }
    }else{
        res.status(409).json({
            massage: "Check your password, please!"
        })
    }
    }





    // JWT_SECRET = "Itissecrettoken"

    // module.exports.restpass = async function(req, res){

    //     const candidate = await User.findOne({email: req.body.email})
    //     const secret =  JWT_SECRET + candidate.password 
    //     const tokenPass = jwt.sign({email: candidate.email, id: candidate._id}, secret, {expiresIn:'5m'})
    //     const link = `http://localhost:3000/change_password/${candidate._id}/${tokenPass}`;
    //     if(candidate){
            // const message = {
            //     to: email,
            //     subject: 'Change the password',
            //     text: `You can go here and change the password: ${link}`
            // }
            // mailer(message)
    //     }

    // }

    // module.exports.newPass = async function(req, res){
    //     const {id, token} = req.params;
    //     const candidate = await User.findOne({_id:id})
    //     if(!candidate){
    //         res.status(409).json({
    //             massage: "User not exists!"
    //         })
    //     }
    //     const secret =  JWT_SECRET + candidate.password 
    //     try {
    //          const verify = jwt.verify(tokenPass, secret)
    //          res.send('Verify ')
    //     } catch (e) {
    //         res.send('Not verify')
    //     }
    // }
   

    // app.use(express.json())
    // app.use(express.urlencoded({extended: false}))
    // app.set('view engine', 'ejs')

    // const JWT_secret = 'secret-token'
    // app.get('/forgot-password', (req, res, next) => {
    //     res.render('forgot-password')
    //   })
      
    //   app.post('/forgot-password', (req, res, next) => { 
    //     // const email = req.body.email
    //     // res.send(email);
        
    //     module.exports.newpass = async function(req, res)  {
    //       const candidate = await User.findOne({email: req.body.email})
    //       if(candidate){
    //         const secret = JWT_secret + candidate.password
    //         const payload =  {
    //           email: candidate.email,
    //           id: candidate._id
    //         }
    //         const token = jwt.signin(payload, secret, {expiresIn: '15m '})
    //         const link = `http://localhost:3000/reset-password/${User._id}/${token}`
    //         console.log(link);
    //         res.send('Password-reset in your email')
    //       }else{
    //         res.status(401).json({
    //           massage: "Check your email, please!"
    //       }) 
    //     //   return;
    //       }
    //     }
    // })
      
      
      
    //   app.get('/reset-password/:id/:token', (req, res, next) => {
    //     const {id, token} = req.params
        
    //     if(candidate){
    //        const secret =  JWT_secret + candidate.password 
    //        try {
    //         const payload =  jwt.verify(token, secret)
      
    //         res.render('reset-password', {email: candidate.email})
    //        } catch (e) {
    //         console.log('e')
    //        }
    //     }
      
    //   })
      
    //   app.post('/reset-password/:id/:token', (req, res, next) => {
    //     const {id, token} = req.params
    //     const { passport, password2 } = req.body; 
         
    //     if(id !== candidate._id){
    //       res.send('Invalid id...')
    //     //   return;
    //     }
      
    //     const secret = JWT_secret + candidate.password 
    //     try {
    //       const payload =  jwt.verify(token, secret) 
      
    //       User.password = password;
          
      
    //     } catch (e) {
    //         console.log('e')
    //     }
    //   })
      
      

    // user.save().than(() => console.log('User has been created'))

