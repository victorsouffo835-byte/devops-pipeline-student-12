const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps Pipeline Student 12 Working 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
