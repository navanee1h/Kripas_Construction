const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const app = express();

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not Connected", err));

//MIDDLEWARES
app.use(express.json());

app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`sever is running on port ${port}`));

// 2) ROUTE

// 3) MOONGO DB CONNECTION

// 4 GLOBAL ERROR HANDLER

// 5 SERVER
