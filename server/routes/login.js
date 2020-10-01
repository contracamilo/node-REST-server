const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/user");

const app = express();

app.post("/login", (req, res) => {
  let { body } = req;

  User.findOne({ email: body.email }, (err, userDB) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
    }

    if (!userDB) {
        res.status(400).json({
          ok: false,
          err: {
            message: "user or pass or both are invalid",
          },
        });
      }

    //Compare encrypted passwords
    const isPasswordValid = bcrypt.compareSync(body.password, userDB.password);

    if (!isPasswordValid) {
      res.status(400).json({
        ok: false,
        err: {
          message: "user or (pass) or both are invalid",
        },
      });
    }

    res.json({
        ok: true,
        user: userDB,
        token: '123'
    })

  });
});

module.exports = app;
