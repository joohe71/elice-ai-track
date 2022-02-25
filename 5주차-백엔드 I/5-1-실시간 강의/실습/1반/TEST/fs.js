const fs = require("fs");

// 비동기지만 Promise 사용은 못한다. 
// 하지만 require("fs/promises") 사용한다면 Promise 가능
const htmlCode = fs.readFile('./index.html','utf-8',(err,data) =>{
    console.log(data)
})

// 동기는 fs.readFileSync