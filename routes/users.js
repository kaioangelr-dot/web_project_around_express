const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "..", "data", "users.json");

router.get("/users/:id", (req, res) => {
  fs.readFile(usersPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading the users");
    }

    const users = JSON.parse(data);
    const user = users.find((item) => item._id === req.params.id);

    if (!user) {
      res.status(404).send({ message: "User ID not found" });
      return;
    }

    res.send(user);
  });
});

router.get("/users", (req, res) => {
  fs.readFile(usersPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading the users");
    }
    res.send(data);
  });
});

module.exports = router;
