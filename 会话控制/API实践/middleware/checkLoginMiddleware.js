/*
 * Author  Giuly.Zhang
 * Date  2026-05-17 16:17:52
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-17 16:19:46
 * Description
 */

function checkLoginMiddleware(req, res, next) {
  if (!req.session.username) {
    // return res.status(403).send("请先登录");
    return res.redirect("/login");
  }
  next();
}

module.exports = checkLoginMiddleware;
