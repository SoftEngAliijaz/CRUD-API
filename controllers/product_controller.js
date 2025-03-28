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
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    return res
      .status(200)
      .json({ message: "Product Deleted", data: deletedProduct });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

module.exports = {
  handleAddNewProduct,
  handleGetAllProductsData,
  handleProductById,
  handleUpdateProductById,
  handleDeleteProductById,
};
