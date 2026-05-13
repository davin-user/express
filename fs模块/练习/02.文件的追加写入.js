/*
 * Author  Giuly.Zhang
 * Date  2026-05-01 20:44:37
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-01 21:29:00
 * Description
 */

/*
 * 文件追加写入
 * 1.异步追加appendFile:参数和writeFile相同
 * 2.同步追加appendFileSync:参数和writeFileSync相同
 * 3.writeFile:第三个参数设置为{flag:'a"}也可以追加写入
 */
const fs = require("fs");
// fs.appendFile("./write.txt", ",择其善者而从之，择其不善而改之", (err) => {
//   if (err) {
//     console.log("追加写入失败", err);
//     return;
//   }
//   console.log("追加写入成功");
// });

// fs.appendFileSync("./write.txt", "\n\r温故而知新，可以为师矣");

fs.writeFile("./write.txt", "\n\r学而时习之，不亦说乎", { flag: 'a' }, (err) => {
  if (err) {
    console.log("追加写入失败", err);
    return;
  }
  console.log("追加文件成功");
});
