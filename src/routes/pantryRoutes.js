const express = require("express");
const router = express.Router();
const {
  getPantryItems,
  addPantryItem,
  updatePantryItem,
  deletePantryItem,
} = require("../controllers/pantryController");

router.get("/:userId", getPantryItems);
router.post("/", addPantryItem);
router.put("/:itemId", updatePantryItem);
router.delete("/:itemId", deletePantryItem);

module.exports = router;
