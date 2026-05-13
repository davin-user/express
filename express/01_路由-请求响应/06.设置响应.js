/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 21:47:40
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 21:52:53
 * Description  
 */
// 1.导入express模块
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由
app.get('/response', (req, res) => {

  // 原生设置响应体
  // res.setHeader('Content-type', 'text/html;charset=utf-8')
  // res.statusCode = 200
  // res.statusMessage = 'OK'
  // res.write('response')
  // res.end('Hello response')

  // express设置响应体
  // res.status(500)
  // res.set('xxx', '123')
  // res.send('Hello express ')
  res.status(500).set('xxx', '123').send('Hello express ')
})

// 4.启动服务，监听端口
app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})