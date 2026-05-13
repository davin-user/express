/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 11:54:03
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 15:15:51
 * Description  
 */
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {

  // 1.获取请求路径
  const { pathname } = new URL(request.url, "http://localhost:9000");

  // 2.根据请求路径响应不同的内容
  if (pathname === "/") {
    const html = fs.readFileSync(__dirname + '/table.html')
    response.end(html)
  } else if (pathname === '/table.js') {
    const js = fs.readFileSync(__dirname + '/table.js')
    response.end(js)
  } else if (pathname === '/table.css') {
    const css = fs.readFileSync(__dirname + '/table.css')
    response.end(css)
  } else {
    response.end('<h1>404 Not Found</h1>')
  }

});

server.listen(9000, () => {
  console.log("服务启动成功");
});
