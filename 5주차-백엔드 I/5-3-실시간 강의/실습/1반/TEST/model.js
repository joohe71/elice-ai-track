const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  pw: { type: String, required: true },
});

module.exports = mongoose.model("elice_user", userSchema);

// 데이터베이스의 뼈대 구축
// 데이터 설계 => 스키마 설계