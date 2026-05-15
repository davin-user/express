/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 20:45:49
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 20:54:58
 * Description
 */
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/bilibili")
  .then((data) => {
    // 创建结构对象
    const BookSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true, // 必须填写
        unique: true, // 唯一值(必须在重建数据库的时候生效，已经建好的数据没用)
      },
      price: {
        type: Number,
        default: 0, // 默认值
      },
      type: {
        type: String,
        enum: ["Book", "Article"], // 枚举值(必须是 Book 或 Article)
      },
      author: String,
    });
    // 创建模型对象
    const BookModel = mongoose.model("books", BookSchema);

    // 个性化读取数据
    // 1.筛选字段 0 不要的字段 1 要的字段
    // BookModel.find()
    //   .select({ _id: 0, name: 1, price: 1 })
    //   .then((data) => {
    //     console.log(data);
    //   });

    // 2.数据排序：1 升序 -1降序
    // BookModel.find()
    //   .select({ name: 1, price: 1, _id: 0 })
    //   .sort({ price: 1 })
    //   .then((data) => {
    //     console.log(data);
    //   });

    // 3.数据截取:skip 跳过数据 limit 截取数据
    BookModel.find()
      .select({ _id: 0, name: 1, price: 1 })
      .sort({ price: 1 })
      .skip(5)
      .limit(5)
      .then((data) => {
        console.log(data);
      });
  })
  .catch((err) => {
    console.log(err);
  });
