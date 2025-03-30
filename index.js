const express = require("express");
const { connectDb } = require("./connection");
const userRouter = require("./routes/todos");
const bodyParser = require("body-parser");

const app = express();
const PORT = 2000;

connectDb()
  .then(() => console.log("Postgres Connected"))
  .catch((e) => console.log(`error: ${e.stack}`));

app.use(express.json({ options: bodyParser.json }));

app.use("/todos", userRouter);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
