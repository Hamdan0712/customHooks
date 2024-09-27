const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db.js");
const JWT_SECRET = require("../config.js");
const { authMiddleware } = require("../middlewares/auth.js");

// sign up and sigin in routes
// using zod for valdiation

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  fullName: zod.string(),
});
router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(body);

  if (!success) {
    return res.json({
      message: "username taken or invalid inputs",
    });
  }

  const user = await User.findOne({ username: req.body.username });

  if (user) {
    return res.status(404).json({
      message: "user is already registered..sigin in",
    });
  }

  const createdUser = await User.create({
    username: body.username,
    password: body.password,
    fullName: body.fullName,
  });

  const userId = createdUser._id;

  const account = await Account.create({
    userId: userId,
    balance: Math.random() * 10000 + 1,
  });

  const token = jwt.sign(
    {
      userId: userId,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true, // Prevents JavaScript access to the cookie
    secure: true, // Ensure the cookie is sent only over HTTPS
    sameSite: "Strict", // Prevents CSRF attacks
    maxAge: 3600000, // 1 hour expiry
  });

  res.status(201).json({
    message: "user is Registered successfully and account is added",
    data: createdUser,
    token: token,
    account: account,
  });
});
const loginBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/login", async (req, res) => {
  const { success } = loginBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (user.password !== req.body.password) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true, // Prevents JavaScript access to the cookie
    secure: true, // Ensure the cookie is sent only over HTTPS
    sameSite: "Strict", // Prevents CSRF attacks
    maxAge: 3600000, // 1 hour expiry
  });
  res.json({ message: "User logged in successfully", token: token });
  return;
});

router.post("/logout", async (req, res) => {
  res.clearCookie("token"); // Clear the cookie
  return res.status(200).json({ message: "User logged out successfully" });
});

const updatedBody = zod.object({
  password: zod.string().optional(),
  fullName: zod.string().optional(),
});

router.put("/update", authMiddleware, async (req, res) => {
  const { success } = updatedBody.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      message: "Failed zod success",
    });
  }

  const updated = await User.findOneAndUpdate({ id: req.userId }, req.body, {
    new: true,
  });

  res.status(200).json({
    message: "Uupdated the user data successfully",
  });
});

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter;

  const users = await User.find({
    fullName: { $regex: filter, $options: "i" },
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      fullName: user.fullName,
      _id: user._id,
    })),
  });
});

module.exports = router;
