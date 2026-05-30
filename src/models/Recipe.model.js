const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    ingredients: [{ type: String }],
    prepTime: { type: Number },
    difficulty: { type: String },
    tags: [{ type: String }],
    instructions: { type: String },
    image: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Recipe", recipeSchema);
