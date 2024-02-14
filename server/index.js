const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/my-blog");

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json({ userDoc });
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(4000);
