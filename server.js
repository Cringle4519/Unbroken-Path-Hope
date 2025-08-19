// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder (create this later)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("🚀 Unbroken Path Hope is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
