/*
 * Author  Giuly.Zhang
 * Date  2026-05-02 16:26:49
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-02 16:29:58
 * Description  
 */
/**
 * 流式读取文件：createReadStream
 * createReadStream(file, options)
 * file：文件路径
 * options：可选参数
 */
// 1.导入模块fs
const fs = require('fs')

// 2.创建文件流对象
const rs = fs.createReadStream('../resource/test.mp4')

// 3.监听事件data
rs.on('data', chunk => {
  console.log('读取的文件长度是', chunk.length)
})
// 4.监听事件：end(可选事件)
// 说明：当文件流读取完成后，会触发end事件
rs.on('end', () => {
  console.log('文件流读取完成')
})
