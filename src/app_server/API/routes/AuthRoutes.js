const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const authController = require("../controllers/AuthController");

router.route("/register").post(authController.registerUser);

module.exports = router;
