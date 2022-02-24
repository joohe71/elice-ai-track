// 생성한 모듈을 불러오세요.
var http = require("http");
var coffee = require("./cafe");

// 서버를 생성하세요.
// 생성한 모듈에 "americano"를 인수로 넘겨 호출하여 화면에 "Make an americano"가 출력되도록 작성하세요.
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(coffee.cafe("americano"));
    res.end();
  })
  .listen(8080);
