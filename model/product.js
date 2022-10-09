const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  price: Number,
  productId: {
    type: String,
  },
});

module.exports = model("product", productSchema);
