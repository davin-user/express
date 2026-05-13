/*
 * Author  Giuly.Zhang
 * Date  2026-05-02 16:03:36
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-02 23:02:01
 * Description  
 */


const fs = require('fs')

/**
 * 异步读取文件：readFile
 * readFile(file, options, callback)
 * file：文件路径
 * options：可选参数
 * callback：回调函数(err,data)
 */
// fs.readFile('./streamFile.txt', (err, data) => {
//   if (err) {
//     console.log('文件读取失败')
//     return;
//   }
//   console.log(data.toString())
// })

const data = fs.readFileSync('./streamFile.txt')
console.log(data.toString())
