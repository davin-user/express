/*
 * Author  Giuly.Zhang
 * Date  2026-05-03 17:22:05
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-03 17:39:44
 * Description  
 */
/*
 * 路径模块：path模块提供了操作路径的功能
 * path.resolve()：将路径转换为规范的绝对路径（最常用）
 * path.sep：路径分接符（/）,获取操作系统的路径分隔符
 * path.parse()：解析路径，返回一个对象，包含路径的目录、文件名、扩展名等信息
 * path.basename：获取路径的基础名称
 * path.dirname：获取路径的目录名
 * path.extname：获取路径的扩展名
 */
const path = require('path')

// 此种方式路径不规范
// console.log(__dirname + './index.html') // /Users/lii/Files/learn/node/code/path./index.html
// console.log(__dirname + 'index.html') // /Users/lii/Files/learn/node/ code/pathindex.html


// 1.resolve():将路径转换为规范的绝对路径（最常用）
// resolve(绝对路径，相对路径，...相对路径)
// 注意：拼接相对路径的时候不能使用/开头，必须是相对路径（./或者直接写文件名）
// console.log(path.resolve(__dirname, './write.txt'))  // /Users/lii/Files/learn/node/code/path/write.txt
// console.log(path.resolve(__dirname, 'index.html'))  // /Users/lii/Files/learn/node/code/index/index.html

// 2.sep：路径分接符（/）
// console.log(path.sep)  // windows: \, linux: /,mac: /


// // 3.parse()：解析路径，返回一个对象，包含路径的目录、文件名、扩展名等信息
// console.log(__filename) // 文件的绝对路径： /Users/lii/Files/learn/node/code/path/path.js
let str = '/Users/lii/Files/learn/node/code/path/path.js'
console.log(path.parse(str))
// {
//   root: '/',
//   dir: '/Users/lii/Files/learn/node/code/path',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }
console.log(path.basename(str)) // path.js
console.log(path.dirname(str)) // /Users/lii/Files/learn/node/code/path
console.log(path.extname(str)) // .js
