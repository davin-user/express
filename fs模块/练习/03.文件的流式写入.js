/*
 * Author  Giuly.Zhang
 * Date  2026-05-01 21:01:00
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-01 21:09:05
 * Description  
 */
/**
 * 文件的流式写入：createWriteStream
 * createWriteStream(file, options)
 * file：文件路径
 * options：可选参数
 */
// 1.导入fs
const fs = require("fs");
// 2.创建写入流对象
const ws = fs.createWriteStream('./streamFile.txt')
// 3.写入文件
ws.write('半亩方塘一鉴开\r\n')
ws.write('天光云影共徘徊\r\n')
ws.write('问渠那得清如许\r\n')
ws.write('唯有源头活水来\r\n')
// 4. 关闭通道(可选)
// ws.close()
ws.end()

// 说明
// 程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数
// 流式写入方式适用于大文件的写入或者频繁写入的场景
// writeFile适合写入频率较低的场景