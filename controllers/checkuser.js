const bcrypt = require('bcryptjs')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

module.exports.login = async function(req, res)  {
     const candidate = await User.findOne({email: req.body.email})
     if(candidate){
        //we find user in db and start to verify password
         const passRes = bcrypt.compareSync(req.body.password,  candidate.password)
         if(passRes){
            //generate JWT
            const token = jwt.sign({
                email: candidate.email,
                id: candidate._id
            }, 'keys.jwt', {expiresIn: 60 * 60})
 
            res.status(200).json({
                token: token
            })
         }else{
            //password is not correcrly
            res.status(404).json({
                massage: "Check your password please, please!"
            })
         }
     }else{
        //we dont find user in db
        res.status(401).json({
            massage: "Check your email please, please!"
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

        }
    }else{
        res.status(409).json({
            massage: "Check your password, please!"
        })
    }
    }


    // user.save().than(() => console.log('User has been created'))

