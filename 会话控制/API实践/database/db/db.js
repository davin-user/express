/*
 * Author  Giuly.Zhang
 * Date  2026-05-16 11:20:17
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-16 16:08:40
 * Description
 */

// 导入配置文件
const { DBHOST, DBPORT, DBNAME } = require("../config/config.js");

module.exports = function (success, error) {
  if (typeof error !== "function") {
    error = () => {
      console.log("数据库连接失败");
    };
  }
  // 1. 导入 mongoose 模块
  const mongoose = require("mongoose");

  // 2.设置strictQuery为true
  mongoose.set("strictQuery", true);

  // 3.连接数据库
  mongoose
    .connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)
    .then(() => {
      console.log("数据库连接成功");
      success();
    })
    .catch(() => {
      error();
    });
};
