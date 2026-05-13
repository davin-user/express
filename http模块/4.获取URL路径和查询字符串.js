/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 10:21:49
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 10:45:34
 * Description  
 */
// 1.导入http模块和url模块
const http = require('http')
const url = require('url')

// 2.创建服务器对象
const server = http.createServer((request, response) => {
  // 2.1 解析requset.url
  const path = request.url
  // console.log(path) // /serarch?keyword=1

  /** 使用url.parse方法已经废弃 */
  // // 2.2 获取路径
  // let res = url.parse(path, true)
  // // console.log(res)
  // const pathname = res.pathname
  // // 2.3 获取查询字符串
  // const query = res.query.keyword
  // console.log(pathname, query)


  /** 推荐使用new URL()方法 */
  // 2.2 实例化URL对象：相对路径 + 基础路径
  const urlObj = new URL(path, 'http://localhost:9000')
  // console.log(urlObj)
  //   {
  //   href: 'http://localhost:9000/serarch?keyword=1',
  //   origin: 'http://localhost:9000',
  //   protocol: 'http:',
  //   username: '',
  //   password: '',
  //   host: 'localhost:9000',
  //   hostname: 'localhost',
  //   port: '9000',
  //   pathname: '/serarch',
  //   search: '?keyword=1',
  //   searchParams: URLSearchParams { 'keyword' => '1' },
  //   hash: ''
  // }

  // 2.3 获取路径名称
  const pathname = urlObj.pathname
  // 2.4 获取查询字符串
  const query = urlObj.searchParams.get('keyword')
  console.log(pathname, query, '获取的值是')
  // 2.4 设置响应体
  response.end('hello url')

})

// 3.启动服务
server.listen(9000, () => {
  console.log('服务启动成功')
})