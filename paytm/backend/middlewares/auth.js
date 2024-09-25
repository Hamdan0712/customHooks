const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config.js");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.starsWith("Bearer ")) {
    return res.status(404).json({
      message: "Invalid authorization headers",
    });

    const token = authHeader.split(" ")[1];

    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);

      if (decodedToken.userId) {
        req.userId = decoded.userId;
        next();
      } else {
        res.status(403).json({
          message: "there was an error while verifiying the token",
        });
      }
    } catch (err) {
      res.status(403).json({
        message: "there was an error while verifiying the token",
      });
    }
  }
};

module.exports = { authMiddleware };
