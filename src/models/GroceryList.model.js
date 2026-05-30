const mongoose = require("mongoose");

const groceryListSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    items: [
      {
        ingredientName: { type: String, required: true },
        quantity: { type: Number },
        checked: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("GroceryList", groceryListSchema);
