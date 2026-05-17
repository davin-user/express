/*
 * Author  Giuly.Zhang
 * Date  2026-05-16 11:38:38
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-16 16:16:31
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

// 获取账单列表
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

// 新增账单
router.post("/list", (req, res) => {
  // 插入到mongoDB数据库中
  AccountModel.create({
    ...req.body,
    time: moment(req.body.time).toDate(),
  })
    .then(() => {
      // res.render("success", { msg: "新增成功", url: "/list" });
      res.json({
        code: 200,
        msg: "新增成功",
        data: req.body,
      });
    })
    .catch((err) => {
      // res.status(500).send("插入数据库失败");
      res.json({
        code: 500,
        msg: "插入数据库失败",
        data: err,
      });
    });
});

// 删除账单
router.delete("/list/:id", (req, res) => {
  // 9.获取删除的id
  const id = req.params.id;

  AccountModel.deleteOne({ _id: id })
    .then(() => {
      // res.render("success", { msg: "删除成功", url: "/list" });
      res.json({
        code: 200,
        msg: "删除成功",
        data: {},
      });
    })
    .catch((err) => {
      // res.status(500).send("删除数据库失败");
      res.json({
        code: 500,
        msg: "删除数据库失败",
        data: err,
      });
    });
});

// 获取账单信息
router.get("/list/:id", (req, res) => {
  const { id } = req.params;
  AccountModel.findById(id)
    .then((data) => {
      res.json({
        code: 200,
        msg: "查询成功",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        code: 500,
        msg: "查询数据库失败",
        data: err,
      });
    });
});

// 更新账单信息
router.patch("/list/:id", async (req, res) => {
  // const { id } = req.params;
  // AccountModel.updateOne({ _id: id }, req.body)
  //   .then(() => {
  //     // 获取更新后的数据
  //     AccountModel.findById(id)
  //       .then((data) => {
  //         res.json({
  //           code: 200,
  //           msg: "更新成功",
  //           data: data,
  //         });
  //       })
  //       .catch((err) => {
  //         res.json({
  //           code: 500,
  //           msg: "更新数据库失败",
  //           data: err,
  //         });
  //       });
  //   })
  //   .catch((err) => {
  //     res.json({
  //       code: 500,
  //       msg: "更新数据库失败",
  //       data: err,
  //     });
  //   });
  try {
    const { id } = req.params;
    await AccountModel.updateOne({ _id: id }, req.body);
    const data = await AccountModel.findById(id);
    res.json({
      code: 200,
      msg: "更新成功",
      data: data,
    });
  } catch (err) {
    res.json({
      code: 500,
      msg: "更新数据库失败",
      data: err,
    });
  }
});

module.exports = router;
