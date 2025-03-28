const Product = require("../models/product_model");

async function handleAddNewProduct(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleGetAllProductsData(req, res) {
  try {
    const data = await Product.find({});
    return res.status(200).json({ message: "All Products Data", data: data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function handleProductById(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
async function handleUpdateProductById(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
async function handleDeleteProductById(req, res) {
  try {
    const id = req.params.id;
    const data = await Product.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Product Deleted Successfully", data: data });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  handleAddNewProduct,
  handleGetAllProductsData,
  handleProductById,
  handleUpdateProductById,
  handleDeleteProductById,
};
