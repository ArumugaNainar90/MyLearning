const express = require('express')
const router = express.Router()

router.get('/forgotpassword', (req,res,next) => {
    console.log('forgotpassword method called')
    next()
})

module.exports = router