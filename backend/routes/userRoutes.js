const router = require("express").Router();

// Controllers
const userController = require("../controllers/userController");

// USER
// Create a new user
router.post("/create", userController.createUser);

// Get a one user
router.get("/getUser:id", userController.getUser);

// Get all users
router.get("/getAll", userController.getAllUser);

// Update a one user
router.get("/update:id", userController.updateUser);

// Delete a one user
router.delete("/delete:id", userController.deleteUser);

module.exports = router;
