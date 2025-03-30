const EmployeeModel = require("../models/employees_model");

async function getAllEmployees(req, res) {
  try {
    const employees = await EmployeeModel.find({});
    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: "No employees found" });
    }
    return res
      .status(200)
      .json({ message: "Employees retrieved successfully", data: employees });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function createNewEmployee(req, res) {
  try {
    const { name, position, salary } = req.body;

    if (!name || !position || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEmployee = new EmployeeModel({ name, position, salary });
    await newEmployee.save();

    return res
      .status(201)
      .json({ message: "Employee created successfully", data: newEmployee });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function getEmployeeById(req, res) {
  try {
    const id = req.params.id;
    const employee = await EmployeeModel.findById(id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    return res
      .status(200)
      .json({ message: "Employee retrieved successfully", data: employee });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function updateEmployeeById(req, res) {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedData = await EmployeeModel.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true, // Ensures validation rules are applied
    });

    if (!updatedData) {
      return res.status(404).json({ message: "Employee not found" });
    }

    return res
      .status(200)
      .json({ message: "Employee updated successfully", data: updatedData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function deleteEmployeeById(req, res) {
  try {
    const id = req.params.id;
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    return res.status(200).json({
      message: "Employee deleted successfully",
      data: deletedEmployee,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

module.exports = {
  getAllEmployees,
  createNewEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
};
