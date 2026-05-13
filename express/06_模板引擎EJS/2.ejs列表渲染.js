/*
 * Author  Giuly.Zhang
 * Date  2026-05-07 21:45:22
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-07 21:49:29
 * Description  
 */
const ejs = require('ejs')
const fs = require('fs')

const html = fs.readFileSync('./2.list.html').toString()

const result = ejs.render(html, { list: ['a', 'b', 'c'] })

console.log(result)