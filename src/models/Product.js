const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    default: "",
  },
  productDescription: {
    type: String,
    default: "",
  },
  productImage: {
    type: String,
    default: "",
  },
  productPrice: {
    type: String,
    default: "",
  },
});

mongoose.model("Product", productSchema);
