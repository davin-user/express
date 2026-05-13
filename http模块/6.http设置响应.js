/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 11:26:20
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 11:33:17
 * Description  
 */

const http = require('http')

const server = http.createServer((request, response) => {

  // 1.设置响应状态码
  response.statusCode = 404

  // 2.设置响应状态描述
  response.statusMessage = 'Not Found Message'

  // 3.设置响应头
  // 可以自定义响应头，也可以设置多个响应头
  response.setHeader('Content-type', 'text/html;charset=utf-8')
  response.setHeader('Server', 'Node.js HTTP Server')
  response.setHeader('myHeader', 'myValue')
  response.setHeader('test', ['123', '456'])
  response.setHeader('Content-Length', 12)

  // 4.设置响应体内容
  // response.end()方法智能设置一次
  // response.write()方法可以设置多次
  // 注意：response.end()方法必须调用，否则响应体内容不会被发送
  response.write('1231231')
  response.write('456456456')
  response.end('404 Not Found Message')
})

server.listen(9000, () => {
  console.log('服务已经启动...')
})