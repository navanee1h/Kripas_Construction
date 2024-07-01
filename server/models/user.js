const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  email: {
    type: "string",
    unique: true,
  },
  password: String,
  isAdmin: Boolean,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
