const express = require("express");
const router = express.Router();
const {
  getGroceryList,
  addGroceryItem,
  toggleGroceryItem,
  deleteGroceryItem,
  clearCheckedItems,
} = require("../controllers/groceryController");

router.get("/:userId", getGroceryList);
router.post("/items", addGroceryItem);
router.put("/items/:itemId", toggleGroceryItem);
router.delete("/items/:itemId", deleteGroceryItem);
router.delete("/clear", clearCheckedItems);

module.exports = router;
