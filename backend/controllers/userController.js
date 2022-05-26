const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// Create a new user
exports.createUser = (req, res) => {
  const { name, lastName, email, password, gender } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const user = new userModel({
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

// Get all users
exports.getAllUser = (req, res) => {
  userModel
    .find()
    .select("-password")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("ID unknow :" + err);
    });
};

// Get one user
exports.getUser = (req, res) => {
  userModel
    .findById(req.params.id)
    .select("-password")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("ID unknow :" + err);
    });
};

// Update a one user
exports.updateUser = (req, res) => {
  const { userId, name, lastName, email, gender } = req.body;
  console.log("-------------------");
  console.log(req.body);

  userModel
    .findByIdAndUpdate(
      userId,
      {
        name,
        lastName,
        email,
        gender,
      },
      { new: true, upsert: true }
    )
    .select("-password")
    .then((result) =>
      res.status(200).json({
        result: result,
        message: "The user has been successfully updated.",
      })
    )
    .catch((err) => res.status(500).json(err));
};

// Delete a one user
exports.deleteUser = (req, res) => {
  userModel
    .findByIdAndDelete(req.params.id)
    .select("-password")
    .then((user) => {
      res.status(200).json({
        message: "The user has been successfully deleted.",
        email: user.email,
        name: user.name,
        lastName: user.lastName,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("ID unknow :" + err);
    });
};
