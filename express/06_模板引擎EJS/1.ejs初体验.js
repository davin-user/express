

// 1.导入ejs
const ejs = require('ejs')
const fs = require('fs')

// 2.定义变量
let china = '中国'
let weather = '今天天气很好啊！'

// 3.读取要渲染的ejs文件
let ejsStr = fs.readFileSync('./1.ejs.html').toString()

// 4.渲染ejs文件
let result = ejs.render(ejsStr, { china, weather })
console.log(result)