const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/',(req,res) => {
    // res.sendFile(path.join(__dirname,'../index.html')) // html 사용할 때
    res.render('index') // pug 사용할 때
})

module.exports = router