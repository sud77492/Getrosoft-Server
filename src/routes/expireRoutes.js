const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Product = mongoose.model("Product");
const Order = mongoose.model("Order");

const router = express.Router();

router.use(requireAuth);

router.post("/addProduct", async (req, res) => {
  const {
    productName,
    productDescription,
    productImage,
    productPrice,
  } = req.body;
  // if (!name || !category || !product || !expiry || !photo) {
  //   return res.status(422).send({
  //     error: "You must provide a name, category, product, expiry, photo",
  //   });
  // }

  try {
    const product = new Product({
      productName,
      productDescription,
      productImage,
      productPrice,
    });
    await product.save();
    res.send(product);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.get("/products", async (req, res) => {
  const products = await Product.find();

  res.send(products);
});

router.post("/addOrder", async (req, res) => {
  const { productId, productName } = req.body;
  console.log("kaise ho " + productId);
  console.log("kaise ho " + productName);
  //console.log(req.user._id);
  try {
    const addOrder = new Order({
      productId,
      productName,
      userId: req.user._id,
    });
    await addOrder.save();
    res.send(addOrder);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.get("/orders", async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

router.delete("/cancel_order/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const cancel_order = await Order.deleteOne({ _id: req.params.id });
    res.send(cancel_order);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
