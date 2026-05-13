/*
 * Author  Giuly.Zhang
 * Date  2026-05-07 21:21:21
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-07 21:26:05
 * Description  
 */

// 1.导入express模块
const express = require('express')


// 2.创建路由对象  
const router = express.Router()

// 如果需要，也可以在这里添加中间件
// router.use((req, res, next) => {
//   if (req.query.code === '521') {
//     next()
//   } else {
//     res.send('暗号错误')
//   }
// })


// 3.定义路由
router.get('/admin', (req, res) => {
  res.send('这是管理员页面')
})
router.get('/setting', (req, res) => {
  res.send('这是设置页面')
})

module.exports = router