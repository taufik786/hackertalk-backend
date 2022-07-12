const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Server running");
});
app.listen(port, () => {
  console.log(`Server Running on port : ${"http://127.0.0.1:5000"}`);
});

