const express = require('express')
const path = require('path')

const app = express()

const indexRoute = require('./routes/index.js')

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/nodejs',{
    useNewUrlParser: true
}).then(()=> {
    console.log("Connected to MongoDB...")
}).catch((err) => {
    console.log(err.message)
})

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    saveDate: {
        type: Date,
        default: Date.now,
    },
    });
    
const User = mongoose.model("User", UserSchema);

const me = new User({
    name: "juhee",
    age: 26,
    });

me.save()
.then(() => {
    console.log(me);
})
.catch((err) => {
    console.log("Error : " , err);
});



const pickMyFood = () => {
    const food = ['돈까스', '김밥','순두부찌개','샌드위치','파스타','피자','치킨','볶음밥','짜장면','짬뽕','마라탕','김치 부침개']

    let ind = Math.floor(Math.random() * food.length)    
    return food[ind]
}

const mbti = [
    'INTJ - 용의주도한 전략가 (Architect)',
    'INTP - 논리적인 사색가 (Logician)',
    'ENTJ - 대담한 ​통솔자 (Commander)',
    'ENTP - ​뜨거운 논쟁을 즐기는 변론가 (Debater)',
    'INFJ - 선의의 옹호자 (Advocate)',
    'INFP - ​열정적인 중재자 (Mediator)',
    'ENFJ - 정의로운 사회운동가 (Protagonist)',
    'ENFP - ​재기발랄한 활동가 (Campaigner)',
    'ISTJ - 청렴결백한 논리주의자 (Logistician)',
    'ISFJ - 용감한 수호자 (Defender)',
    'ESTJ - ​엄격한 관리자 (Executive)',
    'ESFJ - 사교적인 외교관 (Consul)',
    'ISTP - 만능 재주꾼 (Virtuoso)',
    'ISFP - ​호기심 많은 예술가 (Adventurer)',
    'ESTP - ​모험을 즐기는 사업가 (Entrepreneur)',
    'ESFP - 자유로운 영혼의 연예인 (Entertainer)']

const direction = ['동','서','남','북']
const reward = ['우정','행운','재물','지혜','즐거움','놀라움','슬픔','화남']

const randNum = function(arr) {
    return Math.floor(Math.random()*arr.length)
}

app.set('views', path.join(__dirname,'views'))
app.set('view engine','pug')

app.use('/',indexRoute)

app.get('/food',(req,res) => {
    let text = pickMyFood()
    res.send(`<p>오늘 당신에게 추천드리는 메뉴는 바로 <strong>"${text}"</strong> 입니다.</p>`)
})

app.get('/lucky',(req,res) => {
    res.send(`<p>당신과 궁합이 좋은 MBTI는 <strong>"${mbti[randNum(mbti)]}"</strong> 입니다.</p>
    <p>오늘 당신의 행운의 위치는 <strong>${direction[randNum(direction)]}</strong>쪽 입니다.</p>
    <p>오늘 당신의 보상은 <strong>${reward[randNum(reward)]}</strong> 입니다.</p>`)
})


// 전부 그런 것은 아니지만, 대다수의 경우에
// _ <- 안쓰는 변수
// __ <- 시스템 환경변수
app.get('/',(req,res) => {
        res.sendFile(path.join(__dirname,'/index.html'))
})
// req : request(요청) => 사용자의 브라우저 정보, 질문(주소창), 로그인 정보
// res : response(응답) => 사이트 내용(html)
app.get('/webtoon',(req,res) => {
    res.send(`<h2>현재 준비중입니다...조금만 기다려주세요. under construction</h2>`)
})

app.use((err,req,res,next) => {
    console.log(err)
    res.status(500).send(err.message)
})

app.listen(3000, () => {
    console.log('3000번 포트에서 웹서버를 실행 중입니다...')
})