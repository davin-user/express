/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 22:44:47
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 22:47:49
 * Description  
 */
/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 22:23:43
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 22:40:09
 * Description  
 */
const express = require('express')

const app = express()

// 定义路由中间件
let routeMiddleware = (req, res, next) => {
  if (req.query.code === '521') {
    next()
  } else {
    res.send('暗号错误')
  }
}


app.get('/home', (req, res) => {
  res.send('这是首页')
})

app.get('/admin', routeMiddleware, (req, res) => {
  res.send('这是管理员页面')
})


app.get('/setting', routeMiddleware, (req, res) => {
  res.send('这是设置页面')
})


app.all('/{*any}', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})