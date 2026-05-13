/*
 * Author  Giuly.Zhang
 * Date  2026-05-07 17:23:14
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-07 17:55:47
 * Description  
 */
const express = require('express')
const app = express()


// 使用中间件添加防盗链
app.use((req, res, next) => {
  // 获取请求头中的referer字段
  let referer = req.get('Referer')
  // 判断referer是否存在，不存在则说明是直接访问，直接响应
  if (referer) {
    // 实例化url
    let url = new URL(referer)
    // 获取hostname
    let hostname = url.hostname
    // 判断hostname是否是127.0.0.1
    if (hostname !== '127.0.0.1') {
      res.status(404).send('<h1>404 Not Found</h1>')
      return
    }
  }
  next()
})


// 使用静态资源中间件
app.use(express.static(__dirname + '/public'))

app.all('/{*any}', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})