require("dotenv").config(); // Load environment variables (uf you have)
const express = require("express");
const morgan = require("morgan");
const { configureDatabase } = require("./config");
const bookRouter = require("./routes/book_route");
const userRouter = require("./routes/user_route");
const productRouter = require("./routes/product_route");
const employeeRouter = require("./routes/employee_route");

const app = express();
const PORT = process.env.PORT || 9000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/crud-app";

// Connect to Database
configureDatabase(DATABASE_URL);

// Middleware
app.set("json spaces", 2);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // Logs requests

// Routes
app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/employees", employeeRouter);

// Global Error Handling (for unexpected errors)
process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception:", err);
  process.exit(1); // Exit the process
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
