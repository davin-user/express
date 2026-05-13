/*
 * Author  Giuly.Zhang
 * Date  2026-05-03 10:29:13
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-03 10:34:13
 * Description  
 */

/**
 * 文件删除
 * 方法：unlink和unlinkSync
 * 异步删除：unlink(path, callback) / rm(path,options, callback)
 * 同步删除：unlinkSync(path) / rmSync(path, options)
 * @param {*} path 文件路径
 * @param {*} callback 回调函数
 */

// 1、导入fs模块
const fs = require('fs')

// // 2.调用unlink方法删除文件
// fs.unlink('./writeSync.txt', err => {
//   if (err) {
//     console.log('文件删除失败', err)
//     return;
//   }
//   console.log('文件删除成功')
// })
// // 3.调用rm方法删除文件
// fs.rm('../resource/test-2.mp4', err => {
//   if (err) {
//     console.log('文件删除失败', err)
//     return;
//   }
//   console.log('文件删除成功')
// })


// 4.调用unlinkSync方法删除文件
fs.unlinkSync('./writeSync.txt')
console.log('文件删除成功')
// 5.调用rmSync方法删除文件
fs.rmSync('../resource/test-2.mp4')
console.log('文件删除成功')