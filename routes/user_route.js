const express = require("express");
const router = express.Router();
const {
  handleGetAllUsersData,
  handleGetUserById,
  handleAddNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/user_controller");

// Route for creating a new user and fetching all users
router
  .route("/")
  .post(handleAddNewUser) // Create a user
  .get(handleGetAllUsersData); // Get all users

// Routes for user operations by ID
router
  .route("/:id")
  .get(handleGetUserById) // Get user by ID
  .put(handleUpdateUserById) // Update user by ID (full update)
  .delete(handleDeleteUserById); // Delete user by ID

module.exports = router;
