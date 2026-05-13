/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 22:57:03
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 23:08:57
 * Description  
 */
const express = require('express')

const app = express()

// 静态资源中间件
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send('我才是首页')
})

// 说明：路由匹配的首页和静态资源中间件中的首页谁先匹配到，就先响应谁

app.get('/home', (req, res) => {
  res.send('这是首页')
})


app.all('/{*any}', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})