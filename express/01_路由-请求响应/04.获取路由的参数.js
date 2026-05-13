/*
 * Author  Giuly.Zhang
 * Date  2026-05-06 21:19:30
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-06 21:19:31
 * Description  
 */
// 1.导入express模块
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由
app.get('/:id.html', (req, res) => {
  res.setHeader('Content-type', 'text/html;charset=utf-8')
  // 3.1 获取路由参数
  console.log(req.params.id)
  res.end('Hello express ')
})

// 4.启动服务，监听端口
app.listen(3000, () => {
  console.log('服务已启动...，端口正在监听中....')
})