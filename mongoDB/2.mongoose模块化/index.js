/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 21:09:57
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 21:19:44
 * Description
 */
const db = require("./db/db.js");
const BookModel = require("./model/books.js");

db(() => {
  BookModel.create({
    name: "《JavaScript 程序设计》",
    author: "Davin",
    price: 100,
    is_hot: true,
  }).then((data) => {
    console.log("插入成功:", data);
  });
});
