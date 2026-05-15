/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 17:46:03
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 17:51:58
 * Description
 */

//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require("mongoose");

//设置 strictQuery 为 true
mongoose.set("strictQuery", true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose
  .connect("mongodb://127.0.0.1:27017/bilibili")
  .then(() => {
    // 3.1 创建文档的结构对象
    //5. 创建文档的结构对象
    //设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
      name: String,
      author: String,
      price: Number,
      is_hot: Boolean,
    });

    //6. 创建模型对象  对文档操作的封装对象
    let BookModel = mongoose.model("books", BookSchema);

    // 7.读取文档
    // BookModel.find({ name: "西游记" })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // 7.1 根据Id读取文档
    // BookModel.findById("6a06eab2ac73a936cee0940b")
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // 7.2 批量读取所有文档
    // BookModel.find({ author: "余华" })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // 7.3 读取所有文档
    BookModel.find({})
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
