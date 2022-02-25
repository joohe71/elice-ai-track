// 가져오기(자바스크립트) => import (node 터미널로 실행되려면 package.json에 type:module 추가 꼭 하기!)
// 가져오기(node.js) => require ((node 터미널로 실행되려면 package.json에 type:module 제거 꼭 하기!))
import { grade } from './export.js'

console.log(grade)
console.log(grade.kor)
console.log(grade.eng)
console.log(grade.mat)
