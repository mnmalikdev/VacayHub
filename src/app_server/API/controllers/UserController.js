const express = require("express");
const User = require("../models/UserSchema");
const mongoose = require("mongoose");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
};
