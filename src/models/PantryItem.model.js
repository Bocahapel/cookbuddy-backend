const mongoose = require("mongoose");

const pantryItemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ingredientName: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String },
    expirationDate: { type: Date },
  },
  { timestamps: true },
);

module.exports = mongoose.model("PantryItem", pantryItemSchema);
