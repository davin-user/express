/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 18:28:45
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 18:36:42
 * Description  
 */

const http = require("http");
const path = require("path");
const fs = require("fs");

const mimeTypes = {
  css: 'text/css',
  html: 'text/html',
  jpeg: 'image/jpeg',
  png: 'image/png',
  mp4: 'video/mp4',
  js: 'text/javascript',
  json: 'application/json',
}

const server = http.createServer((request, response) => {

  // 1.获取请求路径
  const { pathname } = new URL(request.url, "http://localhost:9000");
  const filePath = __dirname + '/pages' + pathname

  fs.readFile(filePath, (err, data) => {
    if (request.method !== 'GET') {
      response.statusCode = 405
      response.end('<h1>Method Not Allowed</h1>')
      return;
    }
    if (err) {
      // 设置字符集
      response.setHeader('Content-type', 'text/html;charset=utf-8')
      // 处理错误代码
      switch (err.code) {
        case 'ENOENT':
          response.statusCode = 404
          return response.end('<h1>Not Found</h1>')
        default:
          response.statusCode = 500
          return response.end('<h1>Internal Server Error</h1>')
      }
    }

    // 根据路径的后缀,设置响应头
    const extname = path.extname(filePath).slice(1)
    const mime = mimeTypes[extname]
    if (mime) {
      // 使用charset=utf-8解决返回中文乱码的问题
      // 说明：除了html类型,其它资源如css,js等,都不需要设置charset=utf-8字符集,会根据网页资源的编码自动识别
      response.setHeader('Content-type', mime + ';charset=utf-8')
    } else {
      response.setHeader('Content-type', 'application/octet-stream')
    }
    response.end(data)
  })

});

server.listen(9000, () => {
  console.log("服务启动成功");
});