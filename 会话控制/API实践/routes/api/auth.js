/*
 * Author  Giuly.Zhang
 * Date  2026-05-17 22:06:10
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-17 22:45:36
 * Description
 */

const express = require("express");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const UserModel = require("../../database/model/UserModel");

const router = express.Router();

// 登录用户
router.post("/login", (req, res) => {
  // 获取用户名和密码
  const { username, password } = req.body;
  // 数据库查找用户名和密码
  UserModel.findOne({ username, password: md5(password) })
    .then((data) => {
      // 创建token
      const token = jwt.sign(
        { username: data.username, _id: data._id },
        "admin@123",
        { expiresIn: "7d" },
      );
      // 响应结果
      res.json({
        code: 200,
        msg: "登录成功",
        data: token,
      });
    })
    .catch((err) => {
      res.json({
        code: 401,
        msg: "登录失败,用户名或密码错误 ",
      });
    });
});

// 退出登录
router.post("/logout", (req, res) => {
  // 清除session中的用户信息
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
