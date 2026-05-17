/*
 * Author  Giuly.Zhang
 * Date  2026-05-16 22:02:20
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-16 22:54:50
 * Description
 */
const express = require("express");

// 导入express-session模块
const session = require("express-session");

// 导入 connect-mongo 模块
const MongoStore = require("connect-mongo").default;

const app = express();

app.use(
  session({
    name: "sid", // 设置cookie的name，默认值是“connect.sid”
    secret: "biblibili", // 设置session的密钥：参与加密的字符串（又称签名）
    saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
    resave: false, //是否在每次请求时都重新保存session
    store: new MongoStore({
      mongoUrl: "mongodb://127.0.0.1:27017/bilibili", // 连接 mongodb 数据库
    }),
    cookie: {
      httpOnly: true, // 是否只通过http协议传输cookie，默认值是false,开启后前端无法通过js操作cookie
      maxAge: 5 * 60 * 1000, // 会话过期时间，单位毫秒
    },
  }),
);

app.get("/", (req, res) => {
  res.send("Hello express ");
});

// 登录
app.get("/login", (req, res) => {
  if (req.query.username === "admin" && req.query.password === "admin") {
    req.session.username = "admin";
    req.session.uid = "admin";
    res.send("登录成功");
  } else {
    res.send("登录失败");
  }
});

// 获取session
app.get("/cart", (req, res) => {
  if (req.session.username) {
    res.send(`当前用户是 ${req.session.username}`);
  } else {
    res.send("请先登录");
  }
});

// session的销毁
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("退出成功");
});

app.listen(3000, () => {
  console.log("服务已启动...，端口正在监听中....");
});
