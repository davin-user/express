/*
 * Author  Giuly.Zhang
 * Date  2026-05-07 21:55:34
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-07 21:59:00
 * Description  
 */
const ejs = require('ejs')
const fs = require('fs')

let isLogin = false
const html = fs.readFileSync('./3.条件渲染.html').toString()

const result = ejs.render(html, { isLogin: isLogin })

console.log(result)
