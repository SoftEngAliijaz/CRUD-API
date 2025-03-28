const Book = require("../models/book_model");
const mongoose = require("mongoose");

// Utility function for error handling
const handleError = (res, error, statusCode = 500) => {
  console.error(error);
  res.status(statusCode).json({ message: error.message });
};

// Get all books
async function handleGetAllBooksData(req, res) {
  try {
    const books = await Book.find({});
    if (!books.length) {
      return res.status(404).json({ message: "No Books Data Found!" });
    }
    res.status(200).json({
      message: "All Books Data Fetched Successfully!",
      data: books,
    });
  } catch (error) {
    handleError(res, error);
  }
}

// Get a book by ID
async function handleGetBookById(req, res) {
  try {
    const { id: bookId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({ message: "Invalid Book ID!" });
    }

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book Not Found!" });
    }

    res.status(200).json({
      message: "Success! Book Data Fetched",
      data: book,
    });
  } catch (error) {
    handleError(res, error);
  }
}

// Add a new book
async function handleAddNewBook(req, res) {
  try {
    const { title, author, publishedDate, genre } = req.body;

    if (!title || !author) {
      return res
        .status(400)
        .json({ message: "Title and Author are required!" });
    }

    const newBook = new Book({ title, author, publishedDate, genre });
    await newBook.save();

    res.status(201).json({
      message: "New Book Added Successfully!",
      data: newBook,
    });
  } catch (error) {
    handleError(res, error);
  }
}

// Update a book by ID
async function handleUpdateBookById(req, res) {
  try {
    const { id: bookId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({ message: "Invalid Book ID!" });
    }

    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book Not Found!" });
    }

    res.status(200).json({
      message: "Book Updated Successfully!",
      data: updatedBook,
    });
  } catch (error) {
    handleError(res, error);
  }
}

// Delete a book by ID
async function handleDeleteBookById(req, res) {
  try {
    const { id: bookId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({ message: "Invalid Book ID!" });
    }

    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book Not Found!" });
    }

    res.status(200).json({
      message: "Book Deleted Successfully!",
      data: `Book with ID: ${bookId} deleted successfully!`,
    });
  } catch (error) {
    handleError(res, error);
  }
}

module.exports = {
  handleGetAllBooksData,
  handleGetBookById,
  handleAddNewBook,
  handleUpdateBookById,
  handleDeleteBookById,
};
