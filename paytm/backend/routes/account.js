const { mongo } = require("mongoose");
const { Account, User } = require("../db");
const { authMiddleware } = require("../middlewares/auth");

const express = reqiuire("express");

const router = express.Router();

router.get("/getbalance", authMiddleware, async (req, res) => {
  const userId = req.body.userId;
  const accountofUser = await Account.findOne({ userId: userId });

  const balance = accountofUser.balance;

  return res.status(200).json({
    msg: "Balance retrived successfully",
    balance: `Your current Balance is ${balance}`,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const { to, amount } = req.body;

  const senderAccount = await Account.findOne({ userId: req.userId }).session(
    session
  );

  if (!senderAccount || senderAccount.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const receiver = await Account.findOne({ userId: to }).session(session);

  if (!receiver) {
    await session.abortTransaction();
    return res.status(404).json({
      message: "the Send user does not exist",
    });
  }

  const updatdSenderBalance = await Account.findOneAndUpdate(
    {
      userId: req.userId,
    },
    {
      $inc: { balance: -amount },
    }
  ).session(session);

  const updatdReceiverBalance = await Account.findOneAndUpdate(
    {
      userId: to,
    },
    {
      $inc: { balance: amount },
    }
  ).session(session);

  await session.commitTransaction();

  return res.status(200).json({
    message: "Transfer successful",
  });
});
