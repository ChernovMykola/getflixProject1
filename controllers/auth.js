const bcrypt = require('bcryptjs')
const User = require('../models/post')

module.exports.login = function(req, res)  {
    res.status(200).json({
        login: 'from controller'
    })
}

module.exports.register = async function(req, res){

    const candidate = await User.findOne({email: req.body.email})

    if(candidate){
        res.status(409).json({
            massage: "Change your email, please!"
        })
    }else{
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
    }
    }


    // user.save().than(() => console.log('User has been created'))

