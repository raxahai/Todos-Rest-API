const express = require("express");
const { connectDb } = require("./connection");
const userRouter = require("./routes/todos");
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/exception_handler");
const authInterceptor = require("./middlewares/auth");
require("dotenv").config();

const app = express();
const PORT = 2000;

connectDb()
  .then(() => console.log("Postgres Connected"))
  .catch((e) => console.log(`error: ${e.stack}`));

app.use(express.json({ options: bodyParser.json }));

app.use("/todos", userRouter);
app.use("/auth", authRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
