const { PORT = 3000 } = process.env;

const express = require("express");
const app = express();

const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

app.use("/", usersRouter);
app.use("/", cardsRouter);

app.get("/", (req, res) => {
  res.send({ message: "The solicitation was not found" });
});

app.listen(PORT);
