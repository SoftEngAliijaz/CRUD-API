const User = require("../models/user_model");
const mongoose = require("mongoose");

// Utility function for error handling
const handleError = (res, error, statusCode = 500) => {
  console.error(error);
  return res.status(statusCode).json({ message: error.message });
};

// Get all users
async function handleGetAllUsersData(req, res) {
  try {
    const users = await User.find({});
    if (!users.length) {
      return res.status(404).json({ message: "No users data found" });
    }
    return res.status(200).json({
      message: "All users data fetched successfully",
      data: users,
    });
  } catch (error) {
    handleError(res, error);
  }
}

// Get a user by ID
async function handleGetUserById(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    handleError(res, error);
  }
}

// Add a new user
async function handleAddNewUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    const newUser = new User({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    });

    const savedUser = await newUser.save();
    return res.status(201).json({
      message: "User created successfully",
      data: savedUser,
    });
  } catch (error) {
    handleError(res, error);
  }
}

// Update a user by ID
async function handleUpdateUserById(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const updates = { ...req.body };

    if (updates.name) updates.name = updates.name.trim();
    if (updates.email) updates.email = updates.email.trim();

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    handleError(res, error);
  }
}

// Delete a user by ID
async function handleDeleteUserById(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    handleError(res, error);
  }
}

module.exports = {
  handleGetAllUsersData,
  handleGetUserById,
  handleAddNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
};
