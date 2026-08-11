require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db_connect");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Online Courses API is running");
});

app.use("/courses", courseRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});