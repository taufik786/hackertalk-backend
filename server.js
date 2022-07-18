const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

require("./config/db");

app.get("/", (req, res) => {
  res.send("Server running");
});

const authRoute = require("./routes/authRoutes");

app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Server Running on port : ${"http://127.0.0.1:5000"}`);
});
