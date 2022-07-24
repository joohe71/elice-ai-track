// const express = require('express')
// const app = express()
// const data = require('./movieData')
// const path = require('path')


// // POST 바디는 JSON 형태로 받을 수 있다.
// app.use(express.json())

// // form은 json 형태로 받아와지지 않기 때문에, 폼형태도 받을 수 있도록 허용해주는 코드 필요
// app.use(express.urlencoded({extended:true}))

// const userData = [
//     {
//         id: 'elice',
//         pw: '1234',
//     },
// ]

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'/login_index.html'))
// })

// app.post('/register',(req,res) => {
//     const { id, pw } = req.body
//     const newData = {
//         id,
//         pw,
//     }
//     userData.push(newData)
//     res.send("등록이 되었습니다. 로그인 해주세요")
// })




// app.post('/login',(req,res) => {
//     // const id = req.body.id;
//     // const pw = req.body.pw;
//     const { id, pw } = req.body
//     // filter는 배열을 반환, find는 배열의 요소를 반환
//     const findElement = userData.find((v) => v.id === id)
//     if(findElement !== undefined && findElement.pw === pw) {
//         res.send({
//             status: "succ"
//         })
//     }
    
//     res.send({
//         status: 'succ'
//     })
    
// })

// app.listen(8080, () => {
//     console.log('8080 포트 실행중입니다.')
// })

// --------------------------------------------


const express = require('express')
const app = express()
const data = require('./movieData')
const path = require('path')
const mongoose = require('mongoose')
const User = require('./model')

// POST 바디는 JSON 형태로 받을 수 있다.
app.use(express.json())

// form은 json 형태로 받아와지지 않기 때문에, 폼형태도 받을 수 있도록 허용해주는 코드 필요
app.use(express.urlencoded({extended:true}))

const userData = [
    {
        id: 'elice',
        pw: '1234',
    },
]


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/login_index.html'))
})

app.post('/register',(req,res) => {

    const { id, pw} = req.body
    const newUser = new User({
        id,
        pw,
    })
    newUser.save()
        .then((v) => {
            console.log('회원가입 성공')
            res.send({
                status: "회원가입 성공"
            })
        })
        .catch((e) => {
            console.log('회원가입 실패')
            res.send({
                status: '회원가입 실패'
            })
        }); // MongoDB에 저장됨

})



// mongoDB에서 find == filter 역할을 하기 떄문에 배열을 반환
// mongodDB에서 findOne == find 역할을 한다.
app.post('/login',(req,res) => {
    // const id = req.body.id;
    // const pw = req.body.pw;
    const { id, pw } = req.body
    // filter는 배열을 반환, find는 배열의 요소를 반환
    User.findOne({id: id})
        .then((result) =>{
            if (result.pw === pw) {
                res.send({
                    status: "로그인 성공"
                })
            }
            else {
                res.send({
                    status: "비밀번호 오류"
                })
            }
        })
        .catch((err) => {
            res.send({
                status: '아이디가 존재하지 않습니다. 회원가입을 진행해주세요!'
            })
        })  
})

app.listen(8080, () => {
    console.log('8080 포트 실행중입니다.')

    mongoose.connect('mongodb://localhost:27017/elice', (err) =>{
    console.log("MongoDB Connect")


})
})