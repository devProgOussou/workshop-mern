const User = require("../models/user.model");

module.exports.addUser = async (req, res) => {
  const { pseudo, email, password } = req.body;
  try {
    const user = await User.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateUser = async (req, res) => {
    
}