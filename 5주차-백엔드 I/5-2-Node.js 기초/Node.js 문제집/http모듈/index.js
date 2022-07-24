// 해설
// http 모듈은 Node.js에서 가장 기본적이고 중요한 웹 모듈로, 서버나 클라이언트와 관련된 기능을 제공합니다.

// createServer() 함수로 요청받고 응답할 수 있는 http.Server 객체를 만듭니다.

// createServer()는 요청에 관한 정보를 담고있는 request와 응답에 관한 정보를 담고있는 response라는 두 개의 매개변수가 있는 함수를 인자로 받습니다.

// response의 writeHead()를 이용해 요청에 응답 헤더 정보를 보냅니다. 인자로는 HTTP 상태 코드와 응답 헤더를 보냅니다. 응답 헤더에는 Content-Type과 같은 정보를 포함합니다. Content-Type은 보낼 데이터에 대한 타입을 지정합니다. (text/html 외에 text/plain 등 필요에 따라 설정합니다)

// response의 end() 함수는 헤더와 본문 데이터를 서버에 전달했음을 알립니다. 인자로 서버에 보낼 본문을 전달합니다.

// http.Server 객체에 listen()으로 포트 정보를 전달하여, 연결을 수신하는 HTTP 서버를 시작합니다.

// createServer()를 이용해 화면에 "Hello Elice!"를 출력해봅시다.

// -----------------------------------------------


// http 모듈을 불러오세요.
const express = require('express')
const app = express()

app.get('/',(req,res) => {
	res.send('Hello Elice!')
})

app.listen(8080)
// "Hello Elice!"를 출력하는 서버 객체를 만드세요.
// 8080포트로 서버를 시작하세요.

// -------------------------------------------
// solution 방법
// http 모듈을 불러오세요.
var http = require("http");

// "Hello Elice!"를 출력하는 서버 객체를 만드세요.
// 8080포트로 서버를 시작하세요.
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello Elice!");
  })
  .listen(8080);

