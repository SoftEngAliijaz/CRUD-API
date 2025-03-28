const {
  handleAddNewProduct,
  handleGetAllProductsData,
  handleProductById,
  handleUpdateProductById,
  handleDeleteProductById,
} = require("../controllers/product_controller");
const express = require("express");
const router = express.Router();

router.route("/").post(handleAddNewProduct).get(handleGetAllProductsData);
router
  .route("/:id")
  .get(handleProductById)
  .put(handleUpdateProductById)
  .delete(handleDeleteProductById);

module.exports = router;
