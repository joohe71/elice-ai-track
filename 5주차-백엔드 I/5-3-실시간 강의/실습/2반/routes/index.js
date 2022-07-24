const express =require('express');
const path = require('path');
const router = express.Router();



router.get('/', (req,res) => {
    res.send('안녕!');
})

// Q. 어떤 수를 받아서 우리가 이 수가 짝수인지 홀수인지 알고 싶다.

// params : 주소에 추가적으로 들어오는 매개변수

router.get('/is_odd/:id', (req,res) => {
    console.log(req.params.id);
    res.send(req.params.id);
})

router.get('/count-form',(req,res) => {
    res.sendFile(path.join(__dirname,'../static/get.html'));
})

// GET은 URL에 모든 정보를 담는다.
// query : 폼(GET)에서 데이터를 가져올 수 있는 방법
// (다른 말로는 추가 매개 변수를 가져 오는 방법)

router.get('/count',(req,res) => {
    const number = parseInt(req.query.number);
    if (number % 2 === 0) {
        res.send("짝수입니다.")
    }
    res.send("홀수입니다.")
})

// post도 만들어보자

router.get('/post-form',(req,res) => {
    res.sendFile(path.join(__dirname,'../static/post.html'));
})

router.post('/count',(req,res) => {
    const number = req.body.number;
})




module.exports = router;