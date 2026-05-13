/*
 * Author  Giuly.Zhang
 * Date  2026-05-03 11:33:33
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-03 11:42:53
 * Description
 */
/*
 * 相对路径的bug
 * 说明：相对路径的参照物是:命令行所在的工作目录
 * 例如：该文件在哪个文件目录在运行，那么相对路径就是哪个文件目录下的路径
 */

// const fs = require('fs')
// fs.writeFileSync('./write.txt', 'hello world')

// 如果是在fs模块下运行，那么相对路径就是fs模块下的路径
// node 11.相对路径的bug.js
//  ~/Files/learn/node/ code/fs模块 下会创建一个write.txt文件
// 内容为hello world


// 如果是在code模块下运行，那么相对路径就是code模块下的路径 
// node  ./fs模块/11.相对路径的bug.js
//  ~/Files/learn/node/ code 下会创建一个write.txt文件
// 内容为hello world


/** 
 * 解决方法：
 * 1.使用绝对路径：__dirname
 * dirname：当前文件所在目录的绝对路径
 */

const fs = require('fs')
fs.writeFileSync(__dirname + '/write.txt', 'hello world')
// 无论在哪个文件下运行，始终会写入到当前文件所在的目录：fs模块/write.txt