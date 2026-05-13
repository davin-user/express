/*
 * Author  Giuly.Zhang
 * Date  2026-05-02 16:32:16
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-02 22:55:53
 * Description
 */
// 需求：将resource文件中的test.mp4文件复制一份
const fs = require('fs')
const process = require('process')

// 方式1:readFileSync和writeFileSyn
// 1.读取文件内容
// const data = fs.readFileSync('../resource/test.mp4')
// 2.写入文件内容
// fs.writeFileSync('../resource/test-1.mp4', data)
// 3.查看占用内存大小
// console.log(process.memoryUsage()) // 70926336字节 67MB

// 方式2:createReadStream和createWriteStream
// 1.创建读取流对象
const rs = fs.createReadStream('../resource/test.mp4')
// 2.创建写入流对象
const ws = fs.createWriteStream('../resource/test-2.mp4')
// 3.绑定data事件
rs.on('data', chunk => {
  ws.write(chunk)
})
// 4.绑定end事件，查看占用内存大小
rs.on('end', () => {
  console.log(process.memoryUsage()) // 65355776字节 62MB
})

// rs.pipe(ws) // 5.使用pipe方法实现文件复制 （很少使用该方式）
