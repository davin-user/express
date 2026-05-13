/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 10:57:21
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 11:05:30
 * Description  
 */
/**
 *  如果请求方法是GET，路径是/login，返回登录页面
 *  如果请求方法是GET，路径是/reg，返回注册页面
 */

// 1.导入http模块
const http = require('http')

// 2.创建服务器对象
const server = http.createServer((request, response) => {
  // 2.1 获取请求方法
  const { method } = request
  // 2.2 获取路径
  const { pathname } = new URL(request.url, 'http://localhost:9000')

  // 设置响应头,解决返回中文乱码的问题
  response.setHeader('Content-type', 'text/html;charset=utf-8')

  // 2.3 判断请求方法和路径
  if (method === 'GET' && pathname === '/login') {
    // 2.3.1 返回登录页面
    response.end('登录页面')
  } else if (method === 'GET' && pathname === '/reg') {
    // 2.3.2 返回注册页面
    response.end('注册页面')
  } else {
    // 2.3.3 返回404页面
    response.end('Not Found')
  }
})

// 3.监听端口9000,启动服务
server.listen(9000, () => {
  console.log('服务启动中... 端口是90000 ... 正在监听中')
})