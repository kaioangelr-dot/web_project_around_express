const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/users/:id', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error reading the users');
    }

    const user = JSON.parse(data).find((item) => item._id === req.params.id);

    if (!user) {
      return res.status(404).send({ message: 'User ID not found' });
    }

    return res.send(user);
  });
});

router.get('/users', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error reading the users');
    }
    return res.send(data);
  });
});

module.exports = router;
