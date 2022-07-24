const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/user");
const { PythonShell } = require('python-shell') //nodejs에서 python 코드 사용할 수 있도록 도와주는 라이브러리
const path = require('path')

// <username>:<password>
// admin:1234

mongoose
  .connect("mongodb+srv://admin:1234@cluster0.yfbio.mongodb.net/elice")
  .then(async () => {
    console.log("DB 연결 성공");
    try {
      const user = new User({
        username: "elice",
        password: "1234",
      });
      await user.save();

      const user2 = new User({
        username: "elice2",
        password: "5678",
      });
      await user2.save();
    } catch (e) {
      console.log("데이터 이미 있음");
    }
  })
  .catch((e) => {
    console.log("DB 연결 실패", e);
  });

// const user = {
//   id: "elice",
//   pw: "1234",
// };

// Post에서 body를 이용하기 위해서는 아래 두줄 필수!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/code_run', (req,res) => {
    const {code} = req.body;
    if (code === undefined) {
        res.send({
            status: 'fail',
            result: '결과 없음'
        })
    }
    PythonShell.runString(code, null, (err,result) => {
        console.log(result)

        res.send({
            status: 'succ',
            result: result,
        })
    })
})



app.post("/login", async(req, res) => {
    const { username, password} = req.body
    // MongoDB 데이터랑 비교하기
    const userData = await User.findOne({ username: username,})
    if (userData === null) {
        res.redirect('/fail')
    }
    else if (userData.password === password) {
            res.send({
                status: 'succ'
            })
    }
    else {
        res.redirect('/fail')
    }

// ------------------------------------------    
//   const { id, pw } = req.body;
//   if (id === user.id && pw === user.pw) {
//     res.redirect("/succ");
//   } else {
//     res.redirect("/fail");
//   }
});

app.get("/succ", (req, res) => {
  res.send("<h1>로그인 성공</h1>");
});

app.get("/fail", (req, res) => {
  res.send("<h1>로그인 실패</h1>");
});

// params, query string
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname ,'/index.html'))
//   res.send(`
//         <form action="/login" method="POST">
//             <input type="text" name="username" >
//             <input type="password" name="password" >
//             <input type="submit" value="로그인">
//         </form>
//     `);
});

app.listen(3000, () => console.log("3000 port listen"));