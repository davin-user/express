/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 20:40:27
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 21:03:43
 * Description  
 */
const express = require('express')

const app = express()


app.get('/', (req, res) => {
  res.end('Hello express ')
})

// GET /home
app.get('/home', (req, res) => {
  res.end('Hello home')
})

// GET /about
app.get('/about', (req, res) => {
  res.end('Hello about')
})

// POST /home
app.post('/login', (req, res) => {
  res.end('登录成功')
})

// 匹配所有方法的路由：任何方法都可以，只有路径是/test
app.all('/test', (req, res) => {
  res.end('测试成功')
})

// 通配符:最后的一个路由兜底，前面的路径方法不匹配时，会执行这个路由
// 通常用来自定义404 Not Found的响应
app.all('{*any}', (req, res) => {
  res.end('404 Not Found ')
})


app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})
