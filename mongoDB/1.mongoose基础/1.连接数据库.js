/*
 * Author  Giuly.Zhang
 * Date  2026-05-14 22:39:17
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 12:32:22
 * Description
 */
// 1.导入mongoose模块
const mongoose = require("mongoose");

// 2.连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

// 3.监听数据库连接成功（Collection successful）
// 监听一次，连接成功后立即触发
// on 监听事件，每次触发都执行
// once 监听一次，连接成功后立即触发
mongoose.connection.once("open", () => {
  console.log("数据库连接成功");
});

// 4.监听数据库连接失败(Collection failed)
mongoose.connection.on("error", () => {
  console.log("数据库连接失败");
});

// 5.监听数据库连接断开(Collection close)
mongoose.connection.on("close", () => {
  console.log("数据库连接断开");
});

// 关闭数据库连接
setTimeout(() => {
  mongoose.disconnect();
}, 5000);
