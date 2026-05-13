/*
 * Author  Giuly.Zhang
 * Date  2026-05-07 21:21:09
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-07 21:23:03
 * Description  
 */

// 1.导入express模块
const express = require('express')

// 2.创建路由对象
const router = express.Router()

// 3.定义路由
router.get('/home', (req, res) => {
  res.send('这是首页')
})

router.get('/search', (req, res) => {
  res.send('这是搜索页面')
})

module.exports = router
