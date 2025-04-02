require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { configureDatabase } = require("./config");
const bookRouter = require("./routes/book_route");
const userRouter = require("./routes/user_route");
const productRouter = require("./routes/product_route");
const employeeRouter = require("./routes/employee_route");

const app = express();
const PORT = process.env.PORT || 9000;
const DATABASE_URL = process.env.DATABASE_URL;

configureDatabase(DATABASE_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("json spaces", 2);
app.use(morgan("dev"));

app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/employees", employeeRouter);

app.get("/", (req, res) => {
  res.send("✅ API is running on Render!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
