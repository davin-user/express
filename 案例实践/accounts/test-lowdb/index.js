/*
 * Author  Giuly.Zhang
 * Date  2026-05-13 22:56:45
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-13 23:21:52
 * Description
 */

// 1.导入lowdb模块
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
// 2.创建数据库对象
const db = low(adapter);

// 3.初始化数据库
db.defaults({ posts: [] }).write();

// 4.写入数据
db.get("posts")
  .push({ title: "lowdb", body: "lowdb 是一个基于 JSON 文件的 NoSQL 数据库" })
  .write();
db.get("posts")
  .unshift({
    title: "lowdb",
    body: "lowdb 是一个基于 JSON 文件的 NoSQL 数据库",
  })
  .write();

// 5.读取数据
const posts = db.get("posts").value();
console.log(posts);

// 6.删除数据
// db.get("posts").remove({ title: "lowdb" }).write();

// // 7.更新数据
db.get("posts")
  .find({ title: "lowdb" })
  .assign({ body: "lowdb 是一个基于 JSON 文件的 NoSQL 数据库" })
  .write();
