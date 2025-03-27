const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: Date,
    },
    pages: {
      type: Number,
    },
    genre: {
      type: String,
    },
    description: {
      type: String,
    },
    isbn: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;
