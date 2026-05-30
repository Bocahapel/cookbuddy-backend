const GroceryList = require("../models/GroceryList.model");

const getGroceryList = async (req, res) => {
  try {
    const list = await GroceryList.findOne({ userId: req.params.userId });
    if (!list)
      return res.status(404).json({ message: "No grocery list found" });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addGroceryItem = async (req, res) => {
  try {
    const { userId, ingredientName, quantity } = req.body;
    const list = await GroceryList.findOneAndUpdate(
      { userId },
      { $push: { items: { ingredientName, quantity, checked: false } } },
      { new: true, upsert: true },
    );
    res.status(201).json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const toggleGroceryItem = async (req, res) => {
  try {
    const { userId, checked } = req.body;
    const list = await GroceryList.findOneAndUpdate(
      { userId, "items._id": req.params.itemId },
      { $set: { "items.$.checked": checked } },
      { new: true },
    );
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteGroceryItem = async (req, res) => {
  try {
    const { userId } = req.body;
    const list = await GroceryList.findOneAndUpdate(
      { userId },
      { $pull: { items: { _id: req.params.itemId } } },
      { new: true },
    );
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const clearCheckedItems = async (req, res) => {
  try {
    const { userId } = req.body;
    const list = await GroceryList.findOneAndUpdate(
      { userId },
      { $pull: { items: { checked: true } } },
      { new: true },
    );
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getGroceryList,
  addGroceryItem,
  toggleGroceryItem,
  deleteGroceryItem,
  clearCheckedItems,
};
