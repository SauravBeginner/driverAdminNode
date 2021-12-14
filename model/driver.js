const mongoose = require("mongoose");

const driverSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  carType: {
    type: String,
    required: true,
  },
  kyc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Drive", driverSchema);
