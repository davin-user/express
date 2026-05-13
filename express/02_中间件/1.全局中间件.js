/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 22:23:43
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 22:40:09
 * Description  
 */
/** 记录请求的路径和IP，保存到access.log文件夹 */
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

function recordMiddleware(req, res, next) {
  const { url, ip } = req
  if (
    url === '/favicon.ico' ||
    url === '/.well-known/appspecific/com.chrome.devtools.json'
  ) {
    return next()
  }
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`)
  next()
}

app.use(recordMiddleware)

app.get('/home', (req, res) => {
  // // 1.获取url和ip
  // const { url, ip } = req
  // // 2.记录url和ip到access.log文件
  // fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`)
  res.send('这是首页')
})

app.get('/admin', (req, res) => {
  // // 1.获取url和ip
  // const { url, ip } = req
  // // 2.记录url和ip到access.log文件
  // fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`)
  res.send('这是管理员页面')
})

app.all('/{*any}', (req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})