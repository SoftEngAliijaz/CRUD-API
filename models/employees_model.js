const { default: mongoose } = require("mongoose");

const employeesModelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const EmployeeModel = mongoose.model("Employee", employeesModelSchema);

module.exports = EmployeeModel;
