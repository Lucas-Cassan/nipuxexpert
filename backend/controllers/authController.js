const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// Create a new user
exports.create = (req, res) => {
  const { name, lastName, email, password, gender } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const user = new User({
        name: name,
        lastName: lastName,
        email: email,
        password: hash,
        gender: gender,
      });
      user
        .save()
        .then(() => {
          res.status(200).json({
            message: "User created.",
            userId: user._id,
            name: user.name,
          });
        })
        .catch((err) => {
          res.status(200).json({
            message: "Email already used.",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
