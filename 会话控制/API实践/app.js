/*
 * Author  Giuly.Zhang
 * Date  2026-05-16 11:54:36
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-17 22:29:07
 * Description
 */
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const { DBHOST, DBPORT, DBNAME } = require("./database/config/config");

const indexRouter = require("./routes/web/index");
const loginRouter = require("./routes/web/auth");
const authRouter = require("./routes/web/auth");

const accountsRouter = require("./routes/api/api");
const authApiRouter = require("./routes/api/auth");

const app = express();

// 设置sesssion的中间件
app.use(
  session({
    name: "sid", // 设置cookie的name，默认值是“connect.sid”
    secret: "biblibili", // 设置session的密钥：参与加密的字符串（又称签名）
    saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
    resave: false, //是否在每次请求时都重新保存session
    store: new MongoStore({
      mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`, // 连接 mongodb 数据库
    }),
    cookie: {
      httpOnly: true, // 是否只通过http协议传输cookie，默认值是false,开启后前端无法通过js操作cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, // 会话过期时间，单位毫秒
    },
  }),
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", loginRouter);
app.use("/", authRouter);

app.use("/api", accountsRouter);
app.use("/api", authApiRouter);

// 设置404中间件
app.use(function (req, res, next) {
  // next(createError(404));
  res.render("404");
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
