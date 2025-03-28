const User = require("../models/user_model");

// Get all users
async function handleGetAllUsersData(req, res) {
  try {
    const users = await User.find({});
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users data found" });
    }
    return res
      .status(200)
      .json({ message: "All users data fetched successfully", data: users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
}

// Get a user by ID
async function handleGetUserById(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User fetched successfully", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
}

// Add a new user
async function handleAddNewUser(req, res) {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    return res
      .status(201)
      .json({ message: "User created successfully", data: savedUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
}

// Update a user by ID
async function handleUpdateUserById(req, res) {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
}

// Delete a user by ID
async function handleDeleteUserById(req, res) {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User deleted successfully", data: deletedUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
}

module.exports = {
  handleGetAllUsersData,
  handleGetUserById,
  handleAddNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
};
