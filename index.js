const express = require("express");
const { configureDatabase } = require("./config");
const bookRouter = require("./routes/book_route");
const userRouter = require("./routes/user_route");
const app = express();

const PORT = process.env.PORT || 3000;

configureDatabase("mongodb://localhost:27017/crud-app");

app.set("json spaces", 2);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
