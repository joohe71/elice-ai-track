const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0; // b로 시작하는 과일의 개수를 저장하는 변수

// /*지시사항을 따라 작성해주세요*/
// for (i=0; i<fruits.length-1;i++ /*fruits[i][0] == 'b'*/) {
//     if (fruits[i].indexOf('b') == 0) {
//         sum = sum + 1
//     }
//     else {
//         sum = sum + 0
//     }
// }

// document.write("b로 시작하는 과일은 " + sum + "개")

fruits.forEach((v,i) => {
    if(fruits[i].indexOf("b")===0) sum++;
})
document.write(`b로 시작하는 과일은 ${sum}개`)
 