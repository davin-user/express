/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 11:54:03
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 12:02:49
 * Description  
 */
// 1.导入http模块和fs模块
const http = require("http");
const fs = require("fs");

// 2.创建server服务对象
const server = http.createServer((request, response) => {

  // 2.1 读取table.html文件内容
  let tableData = fs.readFileSync(__dirname + '/1.2 table.html')

  // 2.2 响应客户端:设置响应体
  response.end(tableData)
});

// 3.启动服务,监听端口
server.listen(9000, () => {
  console.log("服务启动成功");
});
