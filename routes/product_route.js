const express = require("express");
const router = express.Router();
const {
  handleAddNewProduct,
  handleGetAllProductsData,
  handleGetProductById, // Renamed for clarity
  handleUpdateProductById,
  handleDeleteProductById,
} = require("../controllers/product_controller");

// Route for adding a new product and fetching all products
router
  .route("/")
  .post(handleAddNewProduct) // Create a new product
  .get(handleGetAllProductsData); // Get all products

// Routes for product operations by ID
router
  .route("/:id")
  .get(handleGetProductById) // Get product by ID
  .put(handleUpdateProductById) // Update product by ID (full update)
  .delete(handleDeleteProductById); // Delete product by ID

module.exports = router;
