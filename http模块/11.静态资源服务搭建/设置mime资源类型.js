/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 15:37:54
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 18:28:15
 * Description  
 */

/**
 * 媒体类型是一种标准,用来表示文档、文件或者字节流的性质和格式
 * mime类型结构:[type]/[subtype]
 * type:资源的类型,例如:text, image, audio, video, application等
 * subtype:资源的子类型,例如:plain, html, jpeg, mp4,json等
 * 
 * 常见的mime类型
 * text/css: css文档
 * text/javascript: js文档
 * text/plain: 普通文本
 * text/html: HTML文档
 * image/gif: GIF: GIF图像
 * image/jpeg: JPEG图像
 * image/png: PNG图像
 * audio/mpeg: MP3音频
 * video/mp4: MP4视频
 * application/json: JSON数据
 * 
 * 说明：对于未知的资源类型，可以选择application/octet-stream类型,浏览器在遇到该类型的响应时，会对响应体的内容进行独立存储，也就是我们常见的下载效果
 */
const http = require("http");
const path = require("path");
const fs = require("fs");

const mimeTypes = {
  css: 'text/css',
  html: 'text/html',
  jpeg: 'image/jpeg',
  png: 'image/png',
  mp4: 'video/mp4',
  js: 'text/javascript',
  json: 'application/json',
}

const server = http.createServer((request, response) => {

  // 1.获取请求路径
  const { pathname } = new URL(request.url, "http://localhost:9000");
  const filePath = __dirname + '/pages' + pathname

  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.setHeader('Content-type', 'text/html;charset=utf-8')
      response.statusCode = 500
      return response.end('<h1>文件读取失败</h1>')
    }
    // 根据路径的后缀,设置响应头
    const extname = path.extname(filePath).slice(1)
    const mime = mimeTypes[extname]
    if (mime) {
      // 使用charset=utf-8解决返回中文乱码的问题
      // 说明：除了html类型,其它资源如css,js等,都不需要设置charset=utf-8字符集,会根据网页资源的编码自动识别
      response.setHeader('Content-type', mime + ';charset=utf-8')
    } else {
      response.setHeader('Content-type', 'application/octet-stream')
    }
    response.end(data)
  })

});

server.listen(9000, () => {
  console.log("服务启动成功");
});