const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//validator function for email
const emailValidator = (email) => {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email);
};

const userSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userName: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [emailValidator, "Please enter a valid email"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "male", "female"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Age must be 18 or older"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // profilePic: {
  //   type: String,
  //   default: "https://res.cloudinary.com/mnmalikdev/image/upload/v1587690069/default_profile_pic_qxqjqe.png",
  // },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
