const express = require('express')
const router = express.Router()
const controller = require('../controllers/checkuser')


router.post('/login', controller.login)

router.post('/register', controller.register )

router.post('/restpass', controller.restpass)
// router.post('/newpassword', controller.newpass)


module.exports = router