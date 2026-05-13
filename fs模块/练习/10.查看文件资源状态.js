/*
 * Author  Giuly.Zhang
 * Date  2026-05-03 11:17:20
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-03 11:21:09
 * Description  
 */

/*
 * 查看文件资源状态
 * 方法：stat和statSync
 * 异步查看：stat(path, callback)
 * 同步查看：statSync(path)
 * @param {*} path 文件路径
 * @param {*} callback 回调函数(err, data)
 */

// 1.导入fs模块
const fs = require('fs')

// 2.调用stat方法查看文件资源状态
fs.stat('../resource/test.mp4', (err, data) => {
  if (err) {
    console.log('查看文件资源失败', err)
    return;
  }
  // console.log('查看文件资源成功', data)
  // 2.1 判断是否是文件
  console.log(data.isFile())
  // 2.2 判断是否是文件夹
  console.log(data.isDirectory())
})