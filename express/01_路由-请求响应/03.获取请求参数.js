/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 21:06:27
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 21:11:31
 * Description  
 */
const express = require('express')
const app = express()

// 1.获取请求参数
app.get('/search', (req, res) => {
  res.end('hello serarch')
  // 原生操作
  // console.log(req.method)
  // console.log(req.url)
  // console.log(req.httpVersion)
  // console.log(req.headers)
  // console.log(req.headers.host)


  // express 操作
  console.log(req.path) // 获取路径名称 // /search
  console.log(req.query) // 获取查询字符串 // { keyword: '1' }
  console.log(req.ip) // 获取客户端IP地址 // ::1
  console.log(req.get('host')) // 获取主机名 // localhost:3000
})

app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})