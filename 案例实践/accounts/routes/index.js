/*
 * Author  Giuly.Zhang
 * Date  2026-05-09 11:16:46
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 23:13:18
 * Description
 */
var express = require("express");
var router = express.Router();
// 导入moment模块
const moment = require("moment");
// 导入AccountModel模块
const AccountModel = require("../database/model/AccountsModel");

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
  // 8.获取账单数据
  // const accounts = db.get("accounts").value();

  // 获取mongodb中的数据库
  AccountModel.find()
    .sort({ time: -1 })
    .then((data) => {
      res.render("list", { accounts: data, moment });
    })
    .catch((err) => {
      res.status(500).send("查询数据库失败");
    });
});

// 添加记录
router.get("/list/create", (req, res) => {
  // res.send("添加记录");
  res.render("create");
});

// 表单提交
router.post("/list", (req, res) => {
  console.log(req.body);
  // // 5.生成id
  // const id = shortid.generate();
  // // 6.写入数据
  // db.get("accounts")
  //   .unshift({ id, ...req.body })
  //   .write();

  // 插入到mongoDB数据库中
  AccountModel.create({
    ...req.body,
    time: moment(req.body.time).toDate(),
  })
    .then(() => {
      res.render("success", { msg: "新增成功", url: "/list" });
    })
    .catch((err) => {
      res.status(500).send("插入数据库失败");
    });
});

// 删除表单
router.get("/list/:id", (req, res) => {
  // 9.获取删除的id
  const id = req.params.id;
  // console.log(id);
  // // 10.s删除数据
  // db.get("accounts").remove({ id }).write();
  // // 11.跳转列表页
  // res.render("success", { msg: "删除成功", url: "/list" });
  AccountModel.deleteOne({ _id: id })
    .then(() => {
      res.render("success", { msg: "删除成功", url: "/list" });
    })
    .catch((err) => {
      res.status(500).send("删除数据库失败");
    });
});

module.exports = router;
