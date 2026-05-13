var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Express" });
  res.send("记账本首页");
});

// 记账本列表
router.get("/accounts", (req, res) => {
  res.send("记账本列表");
});

// 添加记录
router.get("/accounts/add", (req, res) => {
  res.send("添加记录");
});

module.exports = router;
