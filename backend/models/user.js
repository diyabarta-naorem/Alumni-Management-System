const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  batch: {
    type: Number,
  },
  department: {
    type: String,
  },
  gender: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  job: {
    currentJob: String,
    currentCompany: String,
  },
  social: {
    fb: String,
    ig: String,
    linkedin: String,
    github: String,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
