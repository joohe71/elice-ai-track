const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true
	},
	pw: {
		type: String,
		required: true,
	}
//2. 데이터를 불러올 테이블을 어떻게 정의해야 하는지 고민해보세요.

});

//3. model로 이 userSchema를 다른 파일에서 사용할 수 있게 User model을 exports하세요.
module.exports = mongoose.model('User model', userSchema)
