const Product = require("../models/products");

exports.getAllProducts = async (req, res) => {
  try {
    const phones = await Product.find();
    console.log(phones);
    res.send(phones);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.getProductByProperty = async (req, res) => {
  try {
    const { propertyValue } = req.query;
    const query = { properties: propertyValue };
    const phones = await Product.find(query);
    console.log(phones);
    res.send(phones);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.getProductByModelRegex = async (req, res) => {
  try {
    const { modelRegex } = req.query;
    const query = { model: { $regex: new RegExp(modelRegex, 'i') } };
    const phones = await Product.find(query);
    console.log(phones);
    res.send(phones);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

// Add other controller methods for different routes

exports.addProduct = async (req, res) => {
  try {
    const { model, price, quantity, properties, dateOfCreation } = req.body;
    const newProduct = new Product({
      model,
      price,
      quantity,
      properties,
      dateOfCreation,
    });
    const productAdded = await newProduct.save();
    res.status(201).json(productAdded);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id, model, price } = req.body;
    const updateProduct = await Product.findByIdAndUpdate(id, { model, price });
    res.send("Product updated successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    await Product.findByIdAndRemove(id);
    res.send("Product deleted successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
