### 동기와 비동기
- 비동기 코드가 task queue에 넣어져 실행된다. 동기코드는 바로 call stack에 넣어진다.
- 비동기 처리 시 main thread가 여유가 있을 때에만 event loop가 task queue에서 task를 꺼낸다.
- 동기코드는 main thread에 의해 실행되므로 무한루프 등에 의해 main thread를 블록할 수 있다.

### CORS
- 서버는 같은 Origin이 아닌 요청을 기본적으로 거부합니다. 즉, 브라우저는 다른 Origin의 서버에 대해 Access-Control 헤더를 요구하고, 서버는 기본적으로 해당 헤더를 보내지 않습니다. 허용하려면 별도로 cors 설정을 해주어야 합니다.
- 서버에서 CORS 설정을 바꿀 수 없다면, 브라우저가 아닌 같은 Origin의 Proxy 서버 등으로 요청을 보내 해결할 수 있습니다.