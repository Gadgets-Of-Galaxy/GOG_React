const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  imagethumbnail1: {
    type: String,
    required: true,
  },
  imagethumbnail2: {
    type: String,
    required: true,
  },
  imagethumbnail3: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features1: {
    type: String,
    required: true,
  },
  features2: {
    type: String,
    required: true,
  },
  features3: {
    type: String,
    required: true,
  },
  features4: {
    type: String,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  reviewed: {
    type: Number,
    required: true,
  },
  sold: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: String,
  brand: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
  },
  available: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
