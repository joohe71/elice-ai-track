// var scores = {
//     "kor": 60,
//     "mat": 75,
//     "eng": 50
// }
// var value = Object.values(scores);
// var sum = 0
// for (i=0;i<value.length;i++) {
//     sum += value[i];
//     var avg = sum / Object.keys(scores).length;
// }
// if (scores.kor < 40 || scores.mat < 40 || scores.eng < 40 ) {
//     document.write("fail")
// } else if (avg < 60) {
//     document.write("fail")
// } else {
//     document.write("pass")
//  }

// ---------------------------------------
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
