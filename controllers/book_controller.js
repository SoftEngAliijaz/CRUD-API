const Book = require("../models/book_model");

async function handleGetAllBooksData(req, res) {
  try {
    const getAllBooks = await Book.find({});
    if (getAllBooks.length === 0) {
      return res.status(404).json({
        message: "No Books Data Found!",
      });
    }

    res.status(200).json({
      message: "All Books Data Fetched Successfully!",
      data: getAllBooks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
}
async function handleGetBookById(req, res) {
  try {
    const bookId = req.params.id;
    const getBookById = await Book.findById(bookId);

    if (!bookId) {
      return res.status(404).json({ message: "Book Not Found!" });
    }

    return res.status(200).json({
      message: "Success! Book Data Fetched",
      data: getBookById,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
}
async function handleAddNewBook(req, res) {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
}
async function handleUpdateBookById(req, res) {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
}
async function handleDeleteBookById(req, res) {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
}

module.exports = {
  handleGetAllBooksData,
  handleGetBookById,
  handleAddNewBook,
  handleUpdateBookById,
  handleDeleteBookById,
};
