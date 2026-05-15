/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 13:10:31
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 16:37:38
 * Description
 */
/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 12:36:51
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 13:09:13
 * Description
 */
// 1. 导入 mongoose 模块
const mongoose = require("mongoose");

// 2.连接数据库
mongoose
  .connect("mongodb://127.0.0.1:27017/bilibili")
  .then(() => {
    console.log("数据库连接成功");
    // 3.1 创建文档的结构对象
    const BookSchema = new mongoose.Schema({
      name: String,
      price: Number,
      author: String,
      isPublished: Boolean,
      publishDate: Date,
      tags: [String],
      mixed: mongoose.Schema.Types.Mixed, // 任意类型
      // documentId: mongoose.Schema.Types.ObjectId, // 文档ID类型
    });
    // 3.2 创建文档的模型对象
    const BookModel = mongoose.model("books", BookSchema);

    // 3.3 插入文档
    const book = {
      name: "《JavaScript 程序设计》",
      price: 100,
      author: "Davin",
      isPublished: true,
      publishDate: new Date(),
      tags: ["JavaScript", " 程序设计"],
      mixed: {
        a: 1,
        b: "2",
      },
      // documentId: "abc",
    };
    BookModel.create(book)
      .then((data) => {
        console.log("插入成功:", data);
        // 3.4 关闭数据连接
        mongoose.disconnect();
      })
      .catch((err) => {
        console.log("插入失败:", err);
        mongoose.disconnect();
      });
  })
  .catch((err) => {
    console.log("数据库连接失败:", err);
  });
