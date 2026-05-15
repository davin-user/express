/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 17:58:40
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 18:24:39
 * Description
 */
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/bilibili")
  .then(() => {
    console.log("数据库连接成功");
    // 创建结构对象
    let BookSchema = new mongoose.Schema({
      name: String,
      author: String,
      price: Number,
      is_hot: Boolean,
    });
    // 创建模型对象
    let BookModel = mongoose.model("books", BookSchema);

    // 查询价格小于30的图书
    // BookModel.find({ price: { $lt: 30 } })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // 查询作者是曹雪芹或者吴承恩的图书
    // BookModel.find({ $or: [{ author: "曹雪芹" }, { author: "吴承恩" }] })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // 查询价格大于20,且小于30的图书
    // BookModel.find({ $and: [{ price: { $lt: 30 } }, { price: { $gt: 20 } }] })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // 正则表达式:查询书名中包含三的书籍
    // BookModel.find({ name: /三/ })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    BookModel.find({ name: new RegExp("三") })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log("数据库连接失败:", err);
  });
