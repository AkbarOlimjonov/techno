const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  price: Number,
  productId: {
    type: String,
  },
});

module.exports = model("card", cardSchema);
