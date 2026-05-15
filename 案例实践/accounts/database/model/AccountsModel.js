/*
 * Author  Giuly.Zhang
 * Date  2026-05-15 22:18:03
 * LastEditors  Giuly.Zhang
 * LastEditTime  2026-05-15 22:50:38
 * Description
 */
const mongoose = require("mongoose");

const AccountsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: Date,
  type: {
    type: Number,
    default: -1,
  },
  amount: {
    type: Number,
    default: 0,
  },
  remarks: {
    type: String,
    default: "",
  },
});

const AccountModel = mongoose.model("accounts", AccountsSchema);
module.exports = AccountModel;
