/*
 * Author  Giuly.Zhang
 * Date  2026-05-17 10:56:17
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-17 10:57:38
 * Description
 */
const mongoose = require("mongoose");

// 创建文档结构
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// 创建模型对象
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
