const express = require('express')
const bodyParser = require('body-parser')

const index = require('./routes/index')

const app = express()

app.use(bodyParser.urlencoded({extended: false}));

// 라우터를 연결
app.use('/routes/',index);

/******************************** */
let func1 = (req, res) => {
    console.log("배고프다...");
}

app.get("/", (req, res, next) => {
    res.send("Hello World!");
    next();
});

app.use(func1);
/******************************* */

// 서버 켜야됨
app.listen(3000, () => {
    console.log('서버가 켜졌어요!')
})