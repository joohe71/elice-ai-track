---
# 👉 실시간 강의
---

▶ **강의일** : 2022년 2월 15일  
▶ **유형** : Node.js 
▶ **주차** : 5주차  
▶ **강의유형** : 실시간  
▶ **학습시간** : QR     

---
## 📖 요약
---

- **`export`**
    - 내보내기(자바스크립트) => export (node 터미널로 실행되려면 package.json에 type:module 추가 꼭 하기!)
    - 내보내기(node.js) => exports (node 터미널로 실행되려면 package.json에 type:module 제거 꼭 하기!)</br></br>


- **`module.exports`** vs **`exports`**
    - module.exports는 require() 함수를 사용했을 때 반환 받는 변수이며 비어 있는 객체가 기본값이며 어떤 것으로도 자유롭게 변경할 수 있습니다. 일반적으로 가장 많이 사용되는 방법입니다.</br></br>
    - exports 자체는 절대 반환되지 않습니다. exports는 단순히 module.exports를 참조하고 있습니다. exports를 사용하면 모듈을 작성할 때 더 적은 양의 코드로 작성할 수 있으며 이 변수의 프로퍼티를 사용하는 방법도 안전하고 추천하는 방법입니다.</br></br>

- **`import`**
    - 가져오기(자바스크립트) => import (node 터미널로 실행되려면 package.json에 type:module 추가 꼭 하기!)
    - 가져오기(node.js) => require ((node 터미널로 실행되려면 package.json에 type:module 제거 꼭 하기!))</br></br>

- **`yarn`** 은 **`npm`** 과 같은 기능이며 좀 더 빠르다.
    - npm install express = yarn add express</br></br>
- **request** : 클라이언트가 서버에게 데이터 전달
- **response** : 서버가 클라이언트에게 결과 전달
- **CRUD** : 사회적 약속
    - C => **`POST`**
    - R => **`GET`**
    - U => **`PUT`**
    - D => **`DELETE`**

