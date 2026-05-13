/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 11:47:12
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 11:53:19
 * Description
 */

/**
 * 需求： 搭建http服务,响应一个4行3列的表格，要求表格有隔行换色效果，点击单元格实现高亮显示
 */
const http = require("http");

const server = http.createServer((request, response) => {
  response.write(`
    
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    table, th, td {
      border: 1px solid black;
    }
    th, td {
      padding: 10px;
    }
    tr:nth-child(even) {
      background-color: #acf;
    }
    tr:nth-child(odd) {
      background-color: #fcb;
    }
  </style>
</head>
<body>
  <table border="1">
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
    </tr>
    <tr>
      <td>张三</td>
      <td>18</td>
      <td>男</td>
    </tr>
    <tr>
      <td>张三</td>
      <td>18</td>
      <td>男</td>
    </tr>
    <tr>
      <td>张三</td>
      <td>18</td>
      <td>男</td>
    </tr>
  </table>
  <script>
    const tds = document.querySelectorAll('td');
    tds.forEach(item => {
      item.onclick = function () {
        item.style.backgroundColor = 'red';
      }
    })
  </script>
</body>
</html>
    `);
});

server.listen(9000, () => {
  console.log("服务启动成功");
});
