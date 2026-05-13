/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 21:39:04
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 21:44:26
 * Description  
 */
const express = require('express')
const { data } = require('./singers.json')
console.log(data)

const app = express()

app.get('/singer/:id', (req, res) => {
  res.setHeader('Content-type', 'text/html;charset=utf-8')
  // 获取歌手的id
  const { id } = req.params
  // 从data中找到id对应的歌手
  const singer = data.find(item => item.id === id)
  if (!singer) {
    res.statusCode = 404
    res.end('<h1>歌手不存在</h1>')
    return
  }

  res.end(`
    <h1>${singer.name}</h1>
    <img src="${singer.pic}" alt="">
  `)
})

app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})