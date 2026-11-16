
const express = require("express");
const path = require("path");
const foodDatabase = require("./foodData");

const app = express();

// Allows the server to understand JSON data.
app.use(express.json());

// Allows the server to display frontend files.
app.use(express.static(path.join(__dirname, "../public")));

// GET route to retrieve all food items.
app.get("/foods", (req, res) => {
  console.log("GET /foods request received");

  const foods = foodDatabase.getAll();

  res.status(200).json(foods);
});

// Handles routes that do not exist.
app.use((req, res) => {
  console.log("404 - Route not found");
  res.status(404).json({ message: "Not Found" });
});

// Start the server using a dynamic port.
const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for testing.
module.exports = app;
