/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 21:26:01
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 21:27:37
 * Description
 */
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: String,
  director: String,
  actor: String,
  time: String,
  price: Number,
});

const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = MovieModel;
