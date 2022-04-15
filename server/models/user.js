const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const document = require("./document");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: "Please enter your email",
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      unique: true,
      required: "Please choose a username",
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      requred: true,
    },
    documents: [document.schema],
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
