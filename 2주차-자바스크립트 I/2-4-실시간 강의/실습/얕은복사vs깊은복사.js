// 스프레드 연산자(배열/객체를 펼쳐준다.) => console log(...A)

let A = [1,2,3,4,5,6]
let B = [6,7,8,9,10]
let C = [...A,...B] // A의 배열을 펼쳐주고 B의 배열을 펼처주고 하나의 배열로 합쳐준다.

// 얕은 복사와 깊은 복사는 배열과 객체에서만 일어나니까!!
let str = "abcde"
let str2 = str
str = "edcba"
// 위처럼 해도 str2는 "abcde"로 변하지 않는다는 점 유의 -> 깊은 복사 가능

// 얕은 복사 VS 깊은 복사(스프레드 연산자, slice())

// 얕은 복사
A = [1,2,3,4,5]
B = A // B에 A를 복사 => 얕은 복사
B[0] = 10 // A의 값도 같이 변경됨

// 깊은 복사 => 따라서 C[0] = 89라고 하면 C의 배열만 변경된다.
C = [...A] 

// 새로운 케이스
// https://lodash.com/docs/4.17.15#cloneDeep 참고
a = [[1, 2], 3, 4]; 
b = [...a]; // 배열 안에 배열인 [1,2]부분은 얕은 복사가 되기 때문에 위의 링크 참고하여 깊은 복사 해야한다.
b[0][1] = 4;
console.log(a[0][1]);

// ↓↓↓↓↓---------------------------------
// if
a = [[1,2],[3,4]]
b = a.map(v => v.map(r => r)) // 깊은 복사

