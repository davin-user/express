/*
 * Author  Giuly.Zhang
 * Date  2026-05-07 22:07:21
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-07 22:10:50
 * Description  
 */
const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express()

// 1.设置模板引擎为ejs
app.set('view engine', 'ejs')

// 2.设置模板引擎存放的位置
app.set('views', path.resolve(__dirname, './views'))

app.get('/home', (req, res) => {
  // 3.渲染模板
  const title = '这是首页页面'
  res.render('home', { title }) // 第一个参数是模板文件名，第二个参数是模板中需要的变量
})


app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})
