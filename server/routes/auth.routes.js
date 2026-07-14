const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth.middleware");

const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  changePassword,
} = require("../controllers/auth.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", verifyToken, getProfile);

router.put("/profile", verifyToken, updateProfile);

router.put("/change-password", verifyToken, changePassword);

module.exports = router;