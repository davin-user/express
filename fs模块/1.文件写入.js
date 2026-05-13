/*
 * Author  Giuly.Zhang
 * Date  2026-05-01 20:03:25
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-01 20:44:20
 * Description
 */
/*
 * 文件写入
 * 需求：新建一个文件write.txt，写入内容三人行，则必有我师焉
 */
// 1.导入模块fs
const fs = require("fs");

// 2.写入文件（writeFile或者writeFileSync）
// 2.1 异步写入:writeFile
/*
 * writeFile(file, data, options, callback)
 * file：文件路径
 * data：写入的内容
 * options：可选参数
 * callback：回调函数
 */
fs.writeFile("./write.txt", "三人行，则必有我师焉", (err) => {
  // err：写入失败会传入失败对象，写入成功，则传入null
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});
console.log("程序结束");
// 程序结束 写入成功
// 说明：writeFile是异步写入，回调函数被压入到任务队列中，先执行后面的程序，等写入完成后，才会执行回调函数。

// 2.2 同步写入:writeFileSync
/*
 * writeFileSync(file, data, options)
 * file：文件路径
 * data：写入的内容
 * options：可选参数
 */
fs.writeFileSync("./writeSync.txt", "Hello World");
