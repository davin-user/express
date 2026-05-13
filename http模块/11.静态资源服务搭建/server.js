/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 15:24:48
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 15:37:54
 * Description  
 */
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {

  // 1.获取请求路径
  const { pathname } = new URL(request.url, "http://localhost:9000");

  // // 2.根据请求路径响应不同的内容
  // if (pathname === "/html/index.html") {
  //   const html = fs.readFileSync(__dirname + '/pages/html/index.html')
  //   response.end(html)
  // } else if (pathname === '/assets/test.png') {
  //   const img = fs.readFileSync(__dirname + '/pages/assets/test.png')
  //   response.end(img)
  // }
  // else if (pathname === '/js/index.js') {
  //   const js = fs.readFileSync(__dirname + '/pages/js/index.js')
  //   response.end(js)
  // } else if (pathname === '/css/index.css') {
  //   const css = fs.readFileSync(__dirname + '/pages/css/index.css')
  //   response.end(css)
  // } else {  //   response.end('<h1>404 Not Found</h1>')
  // }


  const filePath = __dirname + '/pages' + pathname

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err, '文件读取失败')
      return response.end('<h1>404 Not Found</h1>')
    }
    response.end(data)
  })

});

server.listen(9000, () => {
  console.log("服务启动成功");
});