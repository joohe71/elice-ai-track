// 생성한 모듈을 불러오세요.
const cafeMenu = require('./cafe')
const express = require('express')
const app = express()

app.get('/',(req,res) => {
	res.send(cafeMenu("americano"))
})

app.listen(8080)
// 서버를 생성하세요.
// 생성한 모듈에 "americano"를 인수로 넘겨 호출하여 화면에 "Make an americano"가 출력되도록 작성하세요.