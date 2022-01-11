const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  cabType: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  pickUp: {
    type: String,
    required: true,
  },
  pickDrop: {
    type: String,
    required: true,
  },
  passengers: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookingSchema);
