const mongoose = require('mongoose')
const User = require('./model')
mongoose.connect('mongodb://localhost:27017/elice', (err) =>{
    console.log("MongoDB Connect")

    const newUser = new User({
        id: 'abcd',
        pw: "12345678",
    })
    newUser.save()
        .then((v) => {
            console.log('성공')
        })
        .catch((e) => {
            console.log('실패')
        }); // MongoDB에 저장됨

        // 조회
        User.find({id: "abcd"}).then((result) => {
            console.log(result)
        })


})