/*
 * Author  Giuly.Zhang
 * Date  2026-05-01 10:50:16
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-01 11:00:26
 * Description
 */
// 1.Buffer.alloc

// 创建一个长度为10字节的Buffer,相当于申请了10字节的空间，每个字节的值为0
let buf_1 = Buffer.alloc(10);
// console.log(buf_1); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 2.Buffer.allocUnsafe
// 创建一个长度为10字节的Buffer，buffer中间可能存在旧值，可能会影响执行结果，所以叫unsafe
let buf_2 = Buffer.allocUnsafe(10);
// console.log(buf_2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 3.Buffer.from

// 通过字符串创建Buffer
// 将每一个字符对应的ASCII码值转换为十六进制的值
let buf_3 = Buffer.from("Hello Node");
// console.log(buf_3); // <Buffer 48 65 6c 6c 6f 20 4e 6f 64 65>

// 通过数组创建Buffer
let buf_4 = Buffer.from([105, 108, 110, 101, 121, 111]);
console.log(buf_4);
