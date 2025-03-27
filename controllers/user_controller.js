const User = require("../models/user_model");

async function handleGetAllUsersData(req, res) {
  try {
    const users = await User.find({});
    if (!users) {
      return res.status(404).json({ message: "No users data found" });
    }

    return res
      .status(200)
      .json({ message: "All users data fetched successfully", data: users });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching users", error });
  }
}

async function handleGetUserById(req, res) {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
}

async function handleAddNewUser(req, res) {
  try {
    const users = await User.create(req.body);
    return res
      .status(201)
      .json({ message: "User created successfully", data: users });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
}

async function handleUpdateUserById(req, res) {
  try {
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
}

async function handleDeleteUserById(req, res) {
  try {
    await User.findByIdandDelete(id);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
}

module.exports = {
  handleGetAllUsersData,
  handleGetUserById,
  handleAddNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
};
