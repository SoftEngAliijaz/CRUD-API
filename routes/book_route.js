const express = require("express");
const router = express.Router();
const {
  handleGetAllBooksData,
  handleGetBookById,
  handleAddNewBook,
  handleUpdateBookById,
  handleDeleteBookById,
} = require("../controllers/book_controller");

router.route("/").post(handleAddNewBook).get(handleGetAllBooksData);
router
  .route("/:id")
  .get(handleGetBookById)
  .put(handleUpdateBookById)
  .delete(handleDeleteBookById);

module.exports = router;
