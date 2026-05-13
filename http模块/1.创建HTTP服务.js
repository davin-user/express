/*
 * Author  Giuly.Zhang
 * Date  2026-05-03 21:24:06
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 10:15:12
 * Description  
 */
// 1.导入http模块
const http = require('http')

// 2.创建服务对象
// 回调函数的参数：request(请求对象), response(响应对象)  
const server = http.createServer((request, response) => {
  // 2.1 响应客户端:设置响应体
  // response.end('hello http')
  // 2.2 使用response.setHeader方法设置响应头信息,解决中文乱码问题
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('你好')
})

// 3.启动服务
server.listen(9000, () => {
  console.log('服务启动成功...')
})


/**
 * 注意事项
 * 1.终端中使用ctrl+c停止服务
 * 2.服务启动以后，如果更新代码，则必须重启服务才能生效
 * 3.响应内容中文乱码解决办法：response.setHeader('content-type','text/html;charset=utf-8')
 * 4.端口占用两种解决办法：一种是关闭当前正在运行的端口服务（最常用），另一种是修改端口号
 * 5.http默认端口是80,https默认端口是443。http服务端开发常用的端口号是3000,8080,8090,9000
 * 6.如果端口被其他程序占用，可以使用资源监视器找到占用的端口程序，然后使用任务管理器关闭对应的程序
 */