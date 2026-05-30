const PantryItem = require("../models/PantryItem.model");

const getPantryItems = async (req, res) => {
  try {
    const items = await PantryItem.find({ userId: req.params.userId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPantryItem = async (req, res) => {
  try {
    const item = await PantryItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePantryItem = async (req, res) => {
  try {
    const item = await PantryItem.findByIdAndUpdate(
      req.params.itemId,
      req.body,
      { new: true },
    );
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePantryItem = async (req, res) => {
  try {
    const item = await PantryItem.findByIdAndDelete(req.params.itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPantryItems,
  addPantryItem,
  updatePantryItem,
  deletePantryItem,
};
