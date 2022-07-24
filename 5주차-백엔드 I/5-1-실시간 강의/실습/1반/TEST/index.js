const myMath = require("./myMath");
const express = require('express') //경로 이름이 없다면 node module에 있는 라이브러리르 가져오겠다. 또는 node 내장 모듈

console.log(myMath.sum(1,2))
console.log(myMath.mul(2,2))