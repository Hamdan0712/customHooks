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
  username: String,
  password: String,
  fullName: String,
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    requred: true,
  },
  balance: {
    type: Number,
    requried: true,
  },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account }; // Exporting the User model to be used in other files
