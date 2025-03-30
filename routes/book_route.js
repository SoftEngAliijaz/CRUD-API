const express = require("express");
const router = express.Router();
const {
  handleGetAllBooksData,
  handleGetBookById,
  handleAddNewBook,
  handleUpdateBookById,
  handleDeleteBookById,
} = require("../controllers/book_controller");

// Route for creating a new book and fetching all books
router
  .route("/")
  .post(handleAddNewBook) // Create a book
  .get(handleGetAllBooksData); // Get all books

// Routes for book operations by ID
router
  .route("/:id")
  .get(handleGetBookById) // Get book by ID
  .put(handleUpdateBookById) // Update book by ID (full update)
  .delete(handleDeleteBookById); // Delete book by ID

module.exports = router;
