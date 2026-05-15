/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 21:10:43
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 21:18:28
 * Description
 */
// 1.导入mongoose模块
const mongoose = require("mongoose");

// 2.创建文档结构对象
const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  is_hot: Boolean,
});

// 3.创建模型对象
const BookModel = mongoose.model("books", BookSchema);

// 4.导出模型对象
module.exports = BookModel;
