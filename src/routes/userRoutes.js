const express = require("express");
const router = express.Router();
const {
  registerUser,
  getMe,
  updateMe,
  getAllUsers,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.get("/:id", getMe);
router.put("/:id", updateMe);

//dev purpose

router.get("/", getAllUsers);

module.exports = router;
