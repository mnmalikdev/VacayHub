const express = require("express");
const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const router = express.Router();
const mongoose = require("mongoose");

exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      userName: req.body.userName,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age,
      password: hashedPassword,
    });
    User.create(user);
    res.status(200).json({
      data: user,
    });
    console.log("User Created !");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.loginUser = async (req, res) => {
  //coming soon
};
