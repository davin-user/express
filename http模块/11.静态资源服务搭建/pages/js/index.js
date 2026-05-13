/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 15:27:15
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 18:24:10
 * Description  
 */
const tds = document.querySelectorAll("td");
// 遍历所有td元素
// 为每个td元素添加点击事件
// 点击事件的处理函数中,将当前点击的td元素的背景颜色设置为skyblue
tds.forEach((item) => {
  item.onclick = function () {
    item.style.backgroundColor = "skyblue";
  };
});
