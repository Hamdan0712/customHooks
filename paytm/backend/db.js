const mongoose = require("mongoose");

try {
  mongoose.connect(
    "mongodb+srv://hamdanaveed07:123@cluster0.aaddj7r.mongodb.net/users"
  );
  console.log("Connected to db");
} catch (err) {
  console.log("some error while connection");
}
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account }; // Exporting the User model to be used in other files
