/*
 * Author  Giuly.Zhang
 * Date  2026-05-17 21:46:30
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-17 21:56:32
 * Description
 */
// 引入JWT模块
const jwt = require("jsonwebtoken");

// 创建token:jwt.sign(用户数据，密钥，配置对象)
const token = jwt.sign({ username: "张三" }, "zhangsan@123", {
  expiresIn: "60s", // 过期时间，可以使用 "60s"、"1h"、"7d" 等
});

console.log(token);

// 验证token:jwt.verify(token,密钥)
let t =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuW8oOS4iSIsImlhdCI6MTc3OTAyNjE2NCwiZXhwIjoxNzc5MDI2MjI0fQ.nZtDcvZ4AFaow9XTk9BLhXsJ2BZiegBqnAmiUj8qXt4";
jwt.verify(t, "zhangsan@123", (err, decoded) => {
  console.log(decoded);
});
