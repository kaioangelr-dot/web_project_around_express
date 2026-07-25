const { PORT = 3000 } = process.env;

const express = require("express");
const app = express();

const usersRouter = require("./routes/users");

app.use("/", usersRouter);

app.listen(PORT);
