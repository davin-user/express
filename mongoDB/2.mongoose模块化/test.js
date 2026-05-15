/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 21:10:11
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 21:27:55
 * Description
 */
const db = require("./db/db");
const MovieModel = require("./model/movies");

db(() => {
  MovieModel.create({
    name: "速度与激情",
    director: "斯皮尔伯格",
    actor: "丹尼尔·雷德诺",
    time: "2022-05-20",
    price: 100,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
