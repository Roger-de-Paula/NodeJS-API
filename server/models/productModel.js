const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  brand: { type: String },
  color: { type: String },
  lostTime: { type: Date, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
