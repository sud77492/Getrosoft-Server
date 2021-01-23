const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: String,
    default: "",
  },
  productName: {
    type: String,
    default: "",
  },
  NumberShipped: {
    type: String,
    default: ObjectId(),
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  orderStatus: {
    type: String,
    default: "Pending",
  },
});

mongoose.model("Order", orderSchema);
