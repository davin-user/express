/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 22:00:36
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 22:05:44
 * Description  
 */
const express = require('express')
const path = require('path')
const app = express()
app.get('/other', (req, res) => {
  // 跳转响应
  // res.redirect('http://www.baidu.com')

  // // 下载响应
  // // const path = path.resolve(__dirname, 'singers.json')
  // res.download(__dirname + '/singers.json')

  // // JSON响应
  // res.json({ name: 'name', age: 18 })

  // // 文件响应
  res.sendFile(__dirname + '/02.test_route.html')


})
app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})
