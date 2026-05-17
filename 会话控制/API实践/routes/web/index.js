/*
 * Author  Giuly.Zhang
 * Date  2026-05-09 11:16:46
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-17 16:18:53
 * Description
 */
var express = require("express");
var router = express.Router();
const moment = require("moment");
const AccountModel = require("../../database/model/AccountsModel");
const checkLoginMiddleware = require("../../middleware/checkLoginMiddleware");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("list");
});

// 记账本列表
router.get("/list", checkLoginMiddleware, (req, res) => {
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
router.get("/list/create", checkLoginMiddleware, (req, res) => {
  res.render("create");
});

// 表单提交
router.post("/list", checkLoginMiddleware, (req, res) => {
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
router.get("/list/:id", checkLoginMiddleware, (req, res) => {
  // 9.获取删除的id
  const id = req.params.id;
  AccountModel.deleteOne({ _id: id })
    .then(() => {
      res.render("success", { msg: "删除成功", url: "/list" });
    })
    .catch((err) => {
      res.status(500).send("删除数据库失败");
    });
});

module.exports = router;
