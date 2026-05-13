/*
 * Author  Giuly.Zhang
 * Date  2026-05-04 15:02:55
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-04 15:04:04
 * Description
 */

const tds = document.querySelectorAll("td");
tds.forEach((item) => {
  item.onclick = function () {
    item.style.backgroundColor = "skyblue";
  };
});
