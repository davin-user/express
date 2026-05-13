/*
 * Author  Giuly.Zhang
 * Date  2026-05-07 21:20:49
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-07 21:23:30
 * Description  
 */

const express = require('express')
const app = express()

// 1.导入路由模块
const adminRouter = require('./routes/adminRouter')
const homeRouter = require('./routes/homeRouter')

// 2.使用路由模块
app.use(adminRouter)
app.use(homeRouter)

app.get('/{*any}', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})