/*
 * Author  Giuly.Zhang
 * Date  2026-05-09 11:16:46
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-13 22:16:00
 * Description
 */
var express = require("express");
var router = express.Router();

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

module.exports = router;
