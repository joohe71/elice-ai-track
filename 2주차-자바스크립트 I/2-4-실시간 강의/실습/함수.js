// 무에서 유를 창조할 때는 for 문 사용
// 있는 배열에서 새로운 걸 창조할 때는 map 사용

// 일반 함수
function add(a,b) {
    return a+b;
}

// ------------------------------


// 화살표 함수(arrow function)
// 한 줄만 필요하다면 return값 생략 가능
// 두 줄 이상이면 {중괄호} 안에 return값
const add2 = (a,b) => a + b;

// ------------------------------
// 일회용 함수
(() => {
    console.log("hello")
})();

// ------------------------------
// 화살표 함수로 바꾸는 연습

setInterval(function() {
    console.log("hi");
},1000);
// ↓↓↓↓↓ ------------------------------
setInterval(() => console.log("hi"),1000);

// setInterval 함수 사용법
const timer = setInterval(() => console.log("hi !!"),1000)
clearInterval(timer) // 멈추는 함수

// ------------------------------
let num = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (i=0;i<num.length;i++) {
    sum += num[i]
}
console.log(sum)
// ↓↓↓↓↓ ------------------------------
// 같은 형태
for (const n of num) {
    sum += n;
}
console.log(sum)

// ------------------------------
// map 함수, forEach는 배열을 반복(순회)할 때 사용
// map은 반환값이 있고 forEach는 반환값이 없다.
// 따라서 map값은 변수 값으로 들어갈 수 있고 새로운 배열을 반환한다.(깊은 복사 가능)
// forEach는 반환값이 없기 떄문에 변수 값으로 들어갈 수 없다.(just 반복만 한다.)
arr = [1,2,3,4,5,6,7,8]
arr.map(v => v*2) //=>[2,4,6,8,10,12,14,16]
arr.map(function(v) {
    return v*2;
})

// -------------------------------------
obj = {
    name : "강주희",
    company : "카카오",
}
Object.keys(obj).forEach(key => console.log(obj[key]))

// ----------------------------------------
// filter 함수 => 반환값이 존재
let A = [1,2,3,4,5,6,7,8,9,10];
A.filter(v=> v%2 == 0)
//필요없는 값도 삭제 가능
A.filter(v => v!=4)

// --------------------------------
// reduce 함수 => 누적값, 무조건 인자 2개 필요
A.reduce((a,b) => a + b); //55
A.reduce((a,b) => a + b, 10/*초깃값 설정*/) //65

// split()
var str = '<h1>안녕하세요!</h1><div>반갑습니다</div>'
str.split("</h1>").map((v,i) => {
    if (i==0) {
        return v.split(">")[1]
    }
    else {
        return v.split(">")[1].split("<")[0]
    }

})

// ------------------------------------------------------
// indexOf 는 해당 문자열의 index를 찾고 만약 없다면 -1을 반환/ 하지만 찾는 값이 여러개라면 가장 앞에 있는 인덱스를 반환(위치 반환)
// includes => 해당 문제를 포함하고 있는지 물어보는 함수
// sort((a,b) => a-b) => 정렬