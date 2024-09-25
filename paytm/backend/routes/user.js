const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const User = require("../db.js");
const JWT_SECRET = require("../config.js");

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

  const user = await User.findOne({ usernamme: body.usernamme });

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

  const token = jwt.sign(
    {
      userId: createdUser._id,
    },
    JWT_SECRET
  );

  res.status(201).json({
    message: "user is Registered successfully",
    data: createdUser,
    token: token,
  });
});

const updatedBody = zod.object({
  password: zod.string().optional(),
  fullName: zod.string().optional(),
});

router.put("/update", async (req, res) => {
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

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

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
