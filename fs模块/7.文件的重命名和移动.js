

/**
 * 文件的重名和移动
 * 方法：rename和renameSync
 * 异步重命名、移动：rename(oldPath , newPath, callback) 
 * 同步重命名、移动：renameSync(oldPath , newPath, callback) 
 * @param {*} oldPath 旧文件路径
 * @param {*} newPath 新文件路径
 * @param {*} callback 回调函数
 */

// 1.导入模块fs
const fs = require('fs')

// // 2.调用rename方法重命名文件
// fs.rename('./streamFile.txt', './streamFile-1.txt', err => {
//   if (err) {
//     console.log('操作失败', err)
//     return;
//   }
//   console.log('操作成功')
// })

// 3.调用rename方法移动文件
// fs.rename('./streamFile-1.txt', '../resource/remove.txt', err => {
//   if (err) {
//     console.log('操作失败', err)
//     return;
//   }
//   console.log('操作成功')
// })


// 4.调用renameSync方法重命名文件
// fs.renameSync('./write.txt', './write-1.txt')
// console.log('操作成功')
// 5.调用renameSync方法移动文件
fs.renameSync('./write-1.txt', '../resource/remove-write.txt')
console.log('操作成功')