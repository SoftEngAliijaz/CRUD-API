const User = require("../models/user_model");
const mongoose = require("mongoose");

const handleError = (res, error, statusCode = 500) => {
  console.error(error);
  return res.status(statusCode).json({ message: error.message });
};

async function handleGetAllUsersData(req, res) {
  try {
    const users = await User.find({});
    if (!users.length || !users || users.length === 0) {
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

async function handleAddNewUser(req, res) {
  try {
    const {
      first_name,
      last_name,
      age,
      email,
      phone_number,
      address,
      city,
      country,
      gender,
    } = req.body;

    if (
      !first_name?.trim() ||
      !last_name?.trim() ||
      !age ||
      !email?.trim() ||
      !phone_number?.trim() ||
      !address?.trim() ||
      !city?.trim() ||
      !country?.trim() ||
      !gender?.trim()
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const latestUser = await User.findOne().sort({ user_id: -1 });
    const newUserId = latestUser ? latestUser.user_id + 1 : 1;

    const newUser = new User({
      user_id: newUserId,
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.trim(),
      phone_number: phone_number.trim(),
      address: address.trim(),
      city: city.trim(),
      country: country.trim(),
      gender: gender.trim(),
      age: age,
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

async function handleUpdateUserById(req, res) {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const updates = { ...req.body };

    if (updates.first_name) updates.first_name = updates.first_name.trim();
    if (updates.last_name) updates.last_name = updates.last_name.trim();

    const updatedUser = await User.findOneAndUpdate({ user_id: id }, updates, {
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

async function handleDeleteUserById(req, res) {
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const deletedUser = await User.findOneAndDelete({ user_id: id });
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
