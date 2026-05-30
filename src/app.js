const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const userRoutes = require("./routes/userRoutes");
const pantryRoutes = require("./routes/pantryRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const groceryRoutes = require("./routes/groceryRoutes");

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/users", userRoutes);
app.use("/api/pantry", pantryRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/grocery", groceryRoutes);

app.get("/", (req, res) => {
  res.json({ message: "PantryPal API is running" });
});

module.exports = app;
