var http = require('http');
//1. 파일 입출력을 위한 fs 모듈을 import하세요.
var fs = require('fs');


function onRequest(request, response) {

    //응답의 콘텐츠 형식이 HTML인 파일을 가져옵니다.
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    //2. 서버생성시 index.html 파일을 읽어오는 코드를 작성하세요.writeHead()를 사용합니다.
    fs.readFile("./index.html",(err,data) => {
		if(err) {
			response.writeHead(404)
			console.log(err)
			return response.end()}
		response.write(data)
		response.end()
	})
	
    //3. 이때 file read에 실패했을 경우 에러 메시지를 console에 띄우세요.
    //성공하면 index.html파일의 내용을 전달하세요.readFile 메소드 내애 함수를 생성해서 코드를 작성합니다.
        

}

http.createServer(onRequest).listen(8080);