const express = require("express");
const mainRouter = require("./routes/ind.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { json } = require("body-parser");

const router = express.Router();

const app = express();

//middle wares

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's origin
    credentials: true, // Allows cookies to be sent with requests
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", mainRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
