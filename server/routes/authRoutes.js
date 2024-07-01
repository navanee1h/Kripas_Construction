const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, adminLogin } = require("../controllers/authControllers");

// middleware
router.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3001",
      "https://3skvdxvq-3001.inc1.devtunnels.ms",
    ],
  })
);

router.get("/", test);
router.post("/admin/login", adminLogin);

// router.get('/admin/protected', verifyToken, (req, res) => {
//   res.json({ message: "This is a protected route" });
// });

module.exports = router;
