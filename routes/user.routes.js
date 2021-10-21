const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.post("/add-user", userController.addUser);
router.get("/all-users", userController.getAllUsers);

module.exports = router;
