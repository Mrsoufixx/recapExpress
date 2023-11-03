const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  model: String,
  price: Number,
  quantity: Number,
  properties: [String],
  dateOfCreation: {type: Date , default: new Date()},
});

module.exports = model("Product",productSchema)