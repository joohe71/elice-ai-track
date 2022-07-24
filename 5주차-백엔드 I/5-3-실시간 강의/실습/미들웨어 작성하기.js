var express = require('express');
var app = express();


// 지시사항에 있는 함수를 참고해서 myLogger라는 미들웨어 함수를 작성합니다. 
//1. myLogger 함수는 앱에 대한 요청이 해당 함수를 거쳐 전달될 때 단순히 “LOGGED”를 console에 출력합니다. 

let myLogger = (req, res, next) => {
	console.log('LOGGED');
	next();
}


//2. 작성한 미들웨어 함수를 로드하기 위해 미들웨어 함수를 지정하여 app.use()를 호출하세요.
//이 코드를 작성하면 앱이 요청을 수신할 때마다, “LOGGED”라는 메시지가 터미널에 출력됩니다.
app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080);