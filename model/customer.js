const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    userName : {
      type: String,
      required: true,
    },
    userPhoneNumber: {
      type: Number,
      required: true,
    },
  });
  module.exports = mongoose.model('Customer', customerSchema);