/*
 * Author  Giuly.Zhang
 * Date  2026-05-09 11:16:46
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-14 15:34:15
 * Description
 */
var express = require("express");
var router = express.Router();

// 1.导入shortid模块
const shortid = require("shortid");

// 2.导入lowdb模块
const low = require("lowdb");
// 3.导入lowdb/adapters/FileSync模块
const FileSync = require("lowdb/adapters/FileSync");

// 4.创建数据库对象
const path = require("path");
const dbPath = path.join(__dirname, "../data/accounts.json");
const adapter = new FileSync(dbPath);
const db = low(adapter);

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Express" });
  // res.send("记账本首页");
  res.render("list");
});

// 记账本列表
router.get("/list", (req, res) => {
  // res.send("记账本列表");
  res.render("list");
});

// 添加记录
router.get("/list/create", (req, res) => {
  // res.send("添加记录");
  res.render("create");
});

// 表单提交
router.post("/list", (req, res) => {
  console.log(req.body);
  // 5.生成id
  const id = shortid.generate();
  // 6.写入数据
  db.get("accounts")
    .unshift({ id, ...req.body })
    .write();
  res.send("新增表单提交");
  // res.render("create");
});

module.exports = router;
