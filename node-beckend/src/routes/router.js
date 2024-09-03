const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  deleteAllUser,
  getUsers,
  getUserById,
  findUser
} = require("../controllers/user");

const router = express.Router();

router.post("/create/user", createUser);
router.post("/update/user", updateUser);
router.delete("/delete/user", deleteUser);
router.delete("/deleteAll/user", deleteAllUser);
router.get("/get/users", getUsers);
router.get("/get/user/:id", getUserById);
router.get("/find/user", findUser);

module.exports = router;
