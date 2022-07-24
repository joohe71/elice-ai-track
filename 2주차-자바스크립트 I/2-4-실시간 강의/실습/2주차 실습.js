//합격 여부 확인하기
var scores = {
    "kor": 60,
    "mat": 75,
    "eng": 50
}
var value = Object.values(scores);
var sum = 0
for (i=0;i<value.length;i++) {
    sum += value[i];
    var avg = sum / Object.keys(scores).length;
}
if (scores.kor < 40 || scores.mat < 40 || scores.eng < 40 ) {
    document.write("fail")
} else if (avg < 60) {
    document.write("fail")
} else {
    document.write("pass")
 }

// 다른 방법
var scores = {
    "kor": 60,
    "mat": 75,
    "eng": 50}
Object.entries(scores); // 객체를 배열로
if(Object.entries(scores).filter(v => v[1] < 40).length !== 0) {
    document.write("fail")
}
else if(Object.keys(scores).map(key => scores[key]).reduce((a,b) => a + b )/Object.keys(scores).length < 60) {
    document.write("fail")
}
else {
    document.write("pass")
}

// -------------------------------------------------------------------
// 짝수 판별기
for (i=1;i<=100;i++) {
    if (i%2===0) {
        document.write(i);
    }
    
}

//다른 풀이
document.write(Array(100).fill(1).map((v,i)=> (i+1)).filter(v => v%2 ==0).join(""))



// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// 점심 메뉴 찾기
var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]

document.write(foods.length)
document.write('<br>')
// for (i=0;i<foods.length;i++) {
//     if (i%2===0) {
//         document.write(foods[i] + "<br>")
//     }
// }

for (i=0;i<foods.length;i+=2) {
    document.write(foods[i] + "<br>")
}

// 다른풀이
document.write(`${foods.length}<br>`);
foods.filter((v,i) => i % 2 !=1).map(v => document.write(v +"<br>"));
// ------------------------------------------------------------------

// B로 시작하는 과일을 찾아줘
const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0; // b로 시작하는 과일의 개수를 저장하는 변수

/*지시사항을 따라 작성해주세요*/
for (i=0; i<fruits.length-1;i++ /*fruits[i][0] == 'b'*/) {
    if (fruits[i].indexOf('b') == 0) {
        sum = sum + 1
    }
    else {
        sum = sum + 0
    }
}

document.write("b로 시작하는 과일은 " + sum + "개")

//다른 풀이 1
document.write(`b로 시작하는 과일은 ${fruits.filter(v => v[0] == "b").length}개`)
// 2
document.write(`b로 시작하는 과일은 ${fruits.filter(v => v.indexOf("b") === 0).length}개`)
// 3
fruits.forEach((v,i) => {
    if(fruits[i].indexOf("b")===0) sum++;
})
document.write(`b로 시작하는 과일은 ${sum}개`)

// ------------------------------------------------
// ------------------------------------------------


// 특정 학생 정보 바꾸기
/*지시사항에 따라 작성해주세요.*/
const students = [
    {
        name: 'john',
        studentId: 2020123456,
        major: 'business'
    },
    {
        name: 'elice',
        studentId: 2015111111,
        major: 'statistics'
    },
    {
        name: 'jennifer',
        studentId: 2017000000,
        major: 'visual design'
    }
  ]
  
  /*1. elice를 찾아 전공을 'computer science'로 바꿔주세요.*/
  for (i=0;i<(students.length);i++) {
      if (students[i].name == "elice") {
          students[i].major = 'computer science'
          document.write(`${students[i].name}'s major: ${students[i].major}<br>`)
      }
      else {
          students[i].major = students[i].major
          document.write(`${students[i].name}'s major: ${students[i].major}<br>`)
      }
  } 
  
  /*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/
  
  // students.forEach(function (item) {
  //     console.log(item.name)
  // }
  // )

  // 다른 풀이 1
students.forEach( v => {
    if (v.name === "elice") v.major = 'computer science'
})
students.forEach(v => {
    document.write(`${v.name}'s major: ${v.major}<br>`)
}) //원래 값을 바꿔버린 것

// 다른 풀이 2
// 깊은 복사
students.map(student => {
    if(student.name === "elice") {
        return {...student,
                major: "computer science"    
        }}
    else return student;
})

// ------------------------------------------------
// ------------------------------------------------
// 스트링 변환
// 더하기는 문자열이 가장 쎄다
let ba = 100;
ba.toString() // "100" => 숫자를 문자로 바꿔주는 형태



// ------------------------------------------------
// ------------------------------------------------
// 함수만들고 호출하기
/* 1. add 함수 생성 */
function add(x,y) {
    return x + y;
}

// 화살표 함수
const add = (x,y) => x+y;

/* 2. 함수 호출한 결과 웹 화면에 출력 */
document.write(add(3,1) + '<br>' + add("Hello ","Elice"))

