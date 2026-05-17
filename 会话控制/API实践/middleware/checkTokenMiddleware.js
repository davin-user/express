/*
 * Author  Giuly.Zhang
 * Date  2026-05-17 22:36:56
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-17 22:58:06
 * Description
 */
const jwt = require("jsonwebtoken");
function checkTokenMiddleware(req, res, next) {
  // 获取token
  const token = req.get("token");
  // 判断token是否存在
  if (!token) {
    return res.json({
      code: 401,
      msg: "token不能为空",
    });
  }
  // 验证token
  jwt.verify(token, "admin@123", (err, decoded) => {
    if (err) {
      return res.json({
        code: 401,
        msg: "token验证失败",
      });
    }
    // 验证通过，将解码后的数据赋值给req.user:保存用户的信息
    req.user = decoded;
    next();
  });
}
module.exports = checkTokenMiddleware;
