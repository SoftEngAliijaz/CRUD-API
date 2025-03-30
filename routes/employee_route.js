const {
  getAllEmployees,
  createNewEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
} = require("../controllers/employee_controller");

const express = require("express");
const router = express.Router();

// RESTful routes with proper HTTP methods
router.get("/", getAllEmployees); // GET all employees
router.post("/", createNewEmployee); // Create new employee
router.get("/:id", getEmployeeById); // GET employee by ID
router.put("/:id", updateEmployeeById); // UPDATE employee by ID
router.delete("/:id", deleteEmployeeById); // DELETE employee by ID

module.exports = router;
