const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "..", "data", "users.json");

router.get("/users", (req, res) => {
  fs.readFile(usersPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading the users's file");
    }
    res.send(data);
  });
});

module.exports = router;
