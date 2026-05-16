/*
 * Author  Giuly.Zhang
 * Date  2026-05-16 11:38:38
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-16 12:04:35
 * Description
 */
var express = require("express");
var router = express.Router();
const moment = require("moment");
const AccountModel = require("../../database/model/AccountsModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("list");
});

// 记账本列表
router.get("/list", (req, res) => {
  // 获取mongodb中的数据库
  AccountModel.find()
    .sort({ time: -1 })
    .then((data) => {
      // res.render("list", { accounts: data, moment });
      res.json({
        code: 200,
        msg: "查询成功",
        data: data,
      });
    })
    .catch((err) => {
      // res.status(500).send("查询数据库失败");
      res.json({
        code: 500,
        msg: "查询数据库失败",
        data: err,
      });
    });
});

// 添加记录
router.get("/list/create", (req, res) => {
  res.render("create");
});

// 表单提交
router.post("/list", (req, res) => {
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

  AccountModel.deleteOne({ _id: id })
    .then(() => {
      res.render("success", { msg: "删除成功", url: "/list" });
    })
    .catch((err) => {
      res.status(500).send("删除数据库失败");
    });
});

module.exports = router;
