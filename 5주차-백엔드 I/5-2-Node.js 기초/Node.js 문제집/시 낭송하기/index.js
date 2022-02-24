// 해설
// fs 모듈은 file system의 약자로 파일과 관련된 처리와 관련된 작업을 할 때 많이 사용합니다.

// readFileSync() 함수는 매개변수로 파일의 경로를 받아, 파일을 동기적으로 읽고 결과를 문자열로 반환해주는 함수입니다.



// fs 모듈을 불러오세요.
const fs = require('fs')
const express = require('express')
const app = express()

app.get('/',(req,res) => {
	res.send(fs.readFileSync('poetry.txt',"utf-8"))})
// 서버를 생성하세요.
// fs 모듈의 readFileSync() 함수를 이용해 파일을 읽고, 화면에 출력해보세요.
app.listen(8080)


// ---------------------------------
// solution
// fs 모듈을 불러오세요.
var http = require("http");
var fs = require("fs");

// 서버를 생성하세요.
// fs 모듈의 readFileSync() 함수를 이용해 파일을 읽고, 화면에 출력해보세요.
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var data = fs
      .readFileSync("poetry.txt", "utf-8")
      .split("\n");
    for (var i = 0; i < data.length; i++) {
      res.write(data[i]);
      res.write("<br />");
    }

    res.end();
  })
  .listen(8080);
