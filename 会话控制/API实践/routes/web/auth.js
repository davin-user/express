/*
 * Author  Giuly.Zhang
 * Date  2026-05-17 10:40:13
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-17 21:22:05
 * Description
 */
const express = require("express");
const md5 = require("md5");
const UserModel = require("../../database/model/UserModel");

const router = express.Router();

router.get("/reg", (req, res) => {
  res.render("auth/reg");
});

// 注册用户
router.post("/reg", (req, res) => {
  // 进行表单验证，判断是否有用户名和密码
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("用户名或密码不能为空");
  }
  // 存储用户的数据
  UserModel.create({ ...req.body, password: md5(req.body.password) })
    .then((data) => {
      res.render("success", { msg: "注册成功", url: "/login" });
    })
    .catch((err) => {
      res.status(500).send("注册失败");
    });
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

// 登录用户
router.post("/login", (req, res) => {
  // 获取用户名和密码
  const { username, password } = req.body;
  // 数据库查找用户名和密码
  UserModel.findOne({ username, password: md5(password) })
    .then((data) => {
      if (data) {
        // 登录成功，将用户信息存储到session中
        req.session.username = data.username;
        req.session._id = data._id;
        // 登录成功，跳转到列表页
        res.render("success", { msg: "登录成功", url: "/list" });
        // res.redirect("/list");
      } else {
        res.status(500).send("用户名或密码错误");
      }
    })
    .catch((err) => {
      res.status(500).send("登录失败");
    });
});

// 退出登录
// 使用get请求，会遭到CSRF攻击，需要使用post请求
// router.get("/logout", (req, res) => {
//   // 清除session中的用户信息
//   req.session.destroy(() => {
//     res.redirect("/login");
//   });
// });

router.post("/logout", (req, res) => {
  // 清除session中的用户信息
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
