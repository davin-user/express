/*
 * 文件夹的操作:读取、创建、删除
 * 同步方法：readdirSync(path,options)、mkdirSync(path,options)、rmdirSync(path)
 * 异步方法：readdir(path,options,callback)、mkdir(path,options,callback)、rmdir(path,callback)
 * @param {*} path 文件夹路径
 * @param {*} options 可选参数
 * @param {*} callback 回调函数
 * 
 * @param {*} readdir中的callback（err,files）
 * @param {*} err：读取失败会传入失败对象，读取成功，则传入null
 * @param {*} files：文件夹中的文件或文件夹数组
 */

/** 创建文件夹 */

// 1.导入fs模块
// const fs = require('fs')

// 2.创建文件夹
// fs.mkdir('./html', err => {
//   if (err) {
//     console.log(err, '创建文件夹失败')
//     return;
//   }
//   console.log('创建文件夹成功')
// })

// 3.递归创建文件夹
// fs.mkdir('./pages/components/assets', { recursive: true }, err => {
//   if (err) {
//     console.log(err, '创建文件夹失败')
//     return;
//   }
//   console.log('创建文件夹成功')
// })


/** 读取文件夹 */
// // 1.导入fs模块
// const fs = require('fs')

// // 2.读取文件夹
// fs.readdir('./', (err, files) => {
//   if (err) {
//     console.log(err, '读取文件夹失败')
//     return;
//   }
//   console.log(files)
// })


/** 删除文件夹 */
const fs = require('fs')

// fs.rmdir('./html', err => {
//   if (err) {
//     console.log('删除文件夹失败', err)
//     return;
//   }
//   console.log('删除文件夹成功')
// })

// 递归删除
// rmdir:不推荐
// In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
// fs.rmdir('./pages', { recursive: true }, err => {
//   if (err) {
//     console.log('删除文件夹失败', err)
//     return;
//   }
//   console.log('删除文件夹成功')
// })

// rm:推荐
fs.rm('./pages', { recursive: true }, err => {
  if (err) {
    console.log('删除文件夹失败', err)
    return;
  }
  console.log('删除文件夹成功')
})
