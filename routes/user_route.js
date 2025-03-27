const express = require("express");
const router = express.Router();
const {
  handleGetAllUsersData,
  handleGetUserById,
  handleAddNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/user_controller");

router.post("/createUser", handleAddNewUser);
router.get("/getAllUsers", handleGetAllUsersData);
router.get("/getUserById/:id", handleGetUserById);
router.put("/updateUserById/:id", handleUpdateUserById);
router.delete("/deleteUserById/:id", handleDeleteUserById);

module.exports = router;
