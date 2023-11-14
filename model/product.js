const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {
        type: String,
        required: false,
      },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
      },
    category: {
        type: String,
        required: true,
    },
    barcode: {
        type: String,
        required: true,
        unique: true, 
    },
    expiry: {
      type: String,
      required: true,
      unique: false,
  },
  });
  module.exports = mongoose.model('Product', productSchema );