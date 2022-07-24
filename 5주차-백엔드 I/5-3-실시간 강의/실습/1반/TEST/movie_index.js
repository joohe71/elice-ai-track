// 검색엔진 실습해보기
const express = require('express')
const app = express()
const data = require('./movieData')
const path = require('path')

// GET params, query
// POST body

// POST 바디는 JSON 형태로 받을 수 있다.
app.use(express.json())


function movieSearch(name) {
    return data.movieData.filter((v) => {
        return v.name.includes(name)
    })
}


app.get('/', (req,res) => {
    // path는 절대 경로를 써주어야 하기 때문에!! 아래처럼
    // path.join을 사용하는 이유는 모든 사용자에게 공통적으로 호환되게 하기 위해서
    res.sendFile(path.join(__dirname, '/index.html'))})

// query는 물음표로 구분을 하기 때문에 여러 데이터를 받을 수 있음
// 예시 "~~~~~?name=123&name2=345" 라면 {name: 123, name2:345}
// 따라서 params보다 query 사용 추천
app.get('/movie', (req,res) => {
    const name = req.query.name
    const result = movieSearch(name)
    res.send({
        // 왼쪽 변수 : 오른쪽 변수 같으면 하나만 써도 됨
        // result: result
        result
    })
})

// ---------------------------------------------
// 백엔드가 프론트엔드에게 보내는 명세서

/*
* POST http://localhost:3000/movie
* 필요 헤더 JSON
* 필요 바디 name: 영화이름
*/

// 위의 get 형태를 post로도 구현해보기
app.post('/movie',(req,res) => {
    const name = req.query.name;
    const result = movieSearch(name)
    res.send({
        result
    })
})

app.listen(8080, () => {
    console.log('8080 포트 실행중입니다.')
})