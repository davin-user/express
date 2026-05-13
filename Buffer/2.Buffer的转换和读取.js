/*
 * Author  Giuly.Zhang
 * Date  2026-05-01 11:26:43
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-01 11:48:45
 * Description
 */
// 默认使用utf-8的编码形式进行转换
let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
let str = buf.toString();
// console.log(str); // iloveyou

// Buffer的读取
let buf_1 = Buffer.from("Hello");
let value = buf_1[0];
// console.log(buf_1); // <Buffer 48 65 6c 6c 6f>
// console.log(value); // 72 十进制
// console.log(value.toString(2)); // 1001000 二进制
// console.log(value.toString(16)); // 48 十六进制

// Buffer的修改
buf_1[0] = 95;
buf_1[1] = 111;
// console.log(buf_1); //<Buffer 5f 6f 6c 6c 6f>
// console.log(buf_1.toString()); // _ollo

// 溢出
let buf_2 = Buffer.from("hello");
// 8位二进制所表示的最大数字是255
// 361 转换为二进制为 0001 0110 1001
// 舍弃高位的数字 -> 0110 1001(高于8位的进行舍弃)
buf_2[0] = 361;
console.log(buf_2); //<Buffer 69 65 6c 6c 6f>

// 中文
let buf_3 = Buffer.from("你好"); // 采用utf-8的中文字符，一个字符是3个字节
console.log(buf_3); // <Buffer e4 bd a0 e5 a5 bd>
