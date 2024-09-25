const express = require("express");

const userRouter = require("./user.js");
const { authMiddleware } = require("../middlewares/auth.js");

const router = express.Router();

router.use("/user", userRouter);

module.exports = router;
