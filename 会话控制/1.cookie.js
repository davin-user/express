/*
 * Author  Giuly.Zhang
 * Date  2026-05-16 21:17:42
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-16 22:01:33
 * Description
 */
// 导入express模块
const express = require("express");
const cookieParser = require("cookie-parser");

// 创建应用对象
const app = express();

// 解析cookie
app.use(cookieParser());

// 创建路由规则
app.get("/set-cookie", (req, res) => {
  // res.cookie()方法设置cookie,
  // 参数1:cookie名称,参数2:cookie值，参数3:cookie最大过期时间,单位毫秒
  // 参数4:cookie是否只在https传输,参数5:cookie是否只在http传输,参数6:cookie是否只在当前域名下有效
  res.cookie("name", "zhangsan", {
    maxAge: 1000 * 30,
    // httpOnly: true,
    // secure: true,
    // domain: "localhost",
  });
  res.cookie("age", 18);
  res.send("设置cookie成功");
});

// 删除cookie
app.get("/delete-cookie", (req, res) => {
  res.cookie("name");
  res.send("删除cookie成功");
});

// 获取cookie
app.get("/get-cookie", (req, res) => {
  res.send(req.cookies);
});

// 启动服务监听端口
app.listen(3000, () => {
  console.log("服务已启动...，端口正在监听中....");
});
