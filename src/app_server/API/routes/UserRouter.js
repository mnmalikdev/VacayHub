const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.getAllUsers);

module.exports = router;
