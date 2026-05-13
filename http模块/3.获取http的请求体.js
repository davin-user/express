/*
 * Author  Giuly.Zhang
 * Date  2026-05-03 22:31:18
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-03 22:36:54
 * Description  
 */
// get请求中没有请求体，post请求中有请求体
const http = require('http')
const server = http.createServer((request, response) => {
  let body = ''
  // 1.绑定data事件
  request.on('data', chunk => {
    body += chunk
  })
  // 2.绑定end事件，设置响应体
  request.on('end', () => {
    console.log(body) // username=12313&password=123131231313
    response.end('hello http')
  })
})
server.listen(9000, () => {
  console.log('服务启动成功')
})