const express = require("express");
const router = express.Router();
const {
  registerUser,
  getMe,
  updateMe,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.get("/:id", getMe);
router.put("/:id", updateMe);

module.exports = router;
