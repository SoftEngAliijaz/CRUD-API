const Product = require("../models/product_model");

async function handleAddNewProduct(req, res) {
  try {
    const { name, price, category, description } = req.body;

    if (!name || !price || !category) {
      return res
        .status(400)
        .json({ message: "Name, Price, and Category are required" });
    }

    const newProduct = new Product({ name, price, category, description });
    const savedProduct = await newProduct.save();

    return res
      .status(201)
      .json({ message: "Product Created", data: savedProduct });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function handleGetAllProductsData(req, res) {
  try {
    const data = await Product.find({});
    if (data.length === 0) {
      return res.status(404).json({ message: "No Products Found" });
    }
    return res.status(200).json({ message: "All Products Data", data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function handleGetProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    return res.status(200).json({ message: "Product Found", data: product });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function handleUpdateProductById(req, res) {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    return res
      .status(200)
      .json({ message: "Product Updated", data: updatedProduct });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
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
  handleGetProductById,
  handleUpdateProductById,
  handleDeleteProductById,
};
