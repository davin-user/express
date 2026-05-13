/*
 * Author  Giuly.Zhang
 * Date  2026-05-07 22:34:16
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-09 11:10:05
 * Description
 */
var express = require("express");
const { formidable } = require("formidable");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 显示网页的表单
router.get("/form", (req, res) => {
  res.render("form");
});
// 处理文件上传
router.post("/file", (req, res, next) => {
  // 创建一个 form 对象
  const form = formidable({
    multiples: true,
    // 设置文件上传的保存路径
    uploadDir: __dirname + "/../public/images",
    // 保持文件后缀
    keepExtensions: true,
    // 允许空文件上传
    allowEmptyFiles: true,
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields);
    console.log(files.avatar[0].newFilename);
    const fileName = files.avatar[0].newFilename;
    const path = "/images/" + fileName;
    // // 保存文件的路径,将来存储到数据库就行
    res.send(path);
  });
});

module.exports = router;
