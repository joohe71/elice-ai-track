const mongoose = require('mongoose');
const express = require('express');
const server = express();


server.listen(8080, (err) => {
    if(err) {
        console.log("err"); 
    }
    else {
        console.log("start the server succesfully");

  //1.`connect()`함수안에 `mongoose.connect()`를 사용해서 MongoDB에 연결하세요. 이때 성공적으로 연결되면 console에 메시지를 출력하고, 에러가 발생하면 에러메시지를 console에 출력하세요.
	mongoose.connect('mongodb://localhost:27017',(err) => {
	console.log("connected to database succesfully")
	})

    }
});


