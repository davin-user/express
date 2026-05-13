/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 23:10:20
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-07 17:11:50
 * Description  
 */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded()

app.get('/login', (req, res) => {
  // 响应html内容
  res.sendFile(__dirname + '/03.login.html')
})


// 通过中间件获取请求体的内容
app.post('/login', urlencodedParser, (req, res) => {

  console.log('获取的请求体内容是', req.body)
  res.send('登录成功')
})


app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})