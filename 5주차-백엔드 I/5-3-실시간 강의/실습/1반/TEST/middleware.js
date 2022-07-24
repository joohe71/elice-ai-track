const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model");
const path = require("path");

// GET params, query: 여러가지 데이터 가능
// POST body

// 바디는 JSON 형태로 받을 수 있다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

function middle1(req, res, next) {
  console.log("중간과정");
  next();
}

app.use(middle1); // 전역적으로 모든 요청에서 먼저 middle1을 거쳐간다!!
// 안그러고 싶다면 app.get('/middle',middle1,(req,res) => ~~~)식으로!!
app.get("/middle", (req, res) => {
  console.log("마무리 >>>", req.params.temp);
  res.send("Hello");
});

app.get("/middle2", (req, res) => {
  res.send("middle2");
});

app.post("/login", (req, res) => {
  const { id, pw } = req.body;

  // mongoDB find == 배열 메소드 filter와 같음 => 배열을 반환
  // mongoDB findOne == 배열 메소드 find와 같음 => 요소를 반환

  User.findOne({ id: id })
    .then((result) => {
      console.log(result);
      if (result.pw === pw) {
        res.send({
          status: "로그인 성공",
        });
      } else {
        res.send({
          status: "비밀번호 틀림",
        });
      }
    })
    .catch((err) => {
      res.send({
        status: "아이디가 없음.",
      });
    });
});

app.post("/register", (req, res) => {
  const { id, pw } = req.body;
  const newUser = new User({
    id: id,
    pw: pw,
  });
  newUser
    .save()
    .then((v) => {
      res.send({
        status: "회원가입 성공",
      });
    })
    .catch((e) => {
      console.log(e);
      res.send({
        status: "회원가입 실패",
      });
    });
});

app.listen(8080, () => {
  console.log("8080 port listen!");
  mongoose.connect(
    'mongodb://localhost:27017/elice', (err) =>{
    console.log("MongoDB Connect")


})
});