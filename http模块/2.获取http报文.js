/*
 * Author  Giuly.Zhang
 * Date  2026-05-03 22:18:26
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-03 22:25:29
 * Description  
 */
// 1.导入http模块
const http = require('http')
// 2.创建服务对象
const server = http.createServer((request, response) => {

  // 2.1 获取请求方法
  console.log(request.method)  // GET 
  // 2.2 获取请求的url
  console.log(request.url) ///search?keyword=1
  // 2.3 获取http协议的版本号
  console.log(request.httpVersion) // 1.1 
  // 2.4 获取http的请求头
  console.log(request.headers) // {}
  console.log(request.headers.host) // 127.0.0.1:9000

  // 设置响应体
  response.end('hello http')

})
// 3.启动服务
server.listen(9000, () => {
  console.log('服务启动成功')
})