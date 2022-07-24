const http = require('http')
// 참고 자료 : https://hahahoho5915.tistory.com/32
// cookie 심는 방법
// cookie는 보안성에 취약
// 서버 측에서 클라이언트를 식별하기 위해 달아주는 이름표입니다. 

// 서버에서 클라이언트에게 쿠키라는 입장권을 나눠주고

// 클라이언트는 입장권을 가지고 계속 서버와 통신하면 서버입장에서는 아 누가 요청한거구나라고 알 수 있습니다.
// 세션은 입장권을 받는 관리자라고 생각하기
http.createServer((req,res) => {
    console.log(req.url,req.headers.cookie)
    res.writeHead(200,{ 'Set-Cookie': 'mycookie=test'

    })
    res.end('Welcome to our website')
})
.listen(8080, () => {
    console.log('웹 서버가 실행중입니다...')
})