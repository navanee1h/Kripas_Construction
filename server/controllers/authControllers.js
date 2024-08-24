const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
require("dotenv").config();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SECRET_KEY = process.env.SECRET_KEY || "your_jwt_secret_key";

const test = (req, res) => {
  res.status(200).json("test is working");
};

const adminLogin = async (req, res) => {
  console.log("admin login controller ");
  console.log(req.body);
  try {
    const { email, password } = req.body;
    console.log("Login Attempt:", { email, password }); // Log login attempt

    // Check if admin exists
    const user = await userModel.findOne({ email });
    console.log("User Found:", user); // Log found user

    if (!user) {
      console.log("No user found");
      return res.status(400).json({ error: "No user found" });
    }

    if (email !== user.email) {
      console.log("Emails do not match:", { email });
      return res.status(401).json({ error: "Invalid email or password" });
    }

    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ email, role: "admin" }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "DEVELOPMENT",
    });
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error", error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  test,
  adminLogin,
};
