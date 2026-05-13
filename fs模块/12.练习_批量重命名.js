/*
 * Author  Giuly.Zhang
 * Date  2026-05-03 11:44:01
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-03 12:10:34
 * Description
 */

/**
 * 批量重命名练习文件夹下的所有文件，方便排序展示
 */

// 1.导入模块fs
const fs = require('fs')
// 2.获取练习文件夹下的所有文件
const files = fs.readdirSync('./练习')
// 3.遍历文件，重命名文件
files.forEach(item => {
  // 3.1 对每个文件进行分割转换成数组
  const data = item.split('.')
  // 3.2 获取对应的数字和文件名称
  let [num, fileName, typeName] = data
  // 3.3 判断需要重命名的文件
  if (Number(num) < 10) {
    num = '0' + num
  }
  // 3.4 创建新的文件名
  let newName = num + '.' + fileName + '.' + typeName
  // 3.5 重命名文件
  fs.renameSync(`./练习/${item}`, `./练习/${newName}`)
})
