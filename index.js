const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { connectDB } = require("./config/connect");
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// routes

const events = require("./routes/events");

// connect with database
connectDB();

// middleware
app.use(express.json());
app.use(cors());
app.use("/events", events);


app.get("/", (req, res) => {
  res.json("hello world");
});


app.listen(port, () => {
  console.log(`lisition ar port ${port}`);
});
