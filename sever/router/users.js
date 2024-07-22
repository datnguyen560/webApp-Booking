const express = require("express");
const router = express.Router();

const controller = require("../controller/UsersController")
router.get("/countById", controller.CountById)
// users
router.put("/:id", controller.UpdateUser ); // update user data 
router.delete("/:id", controller.DeleteUser ); // delete user detail
router.get("/:id", controller.DetailUser ); // get user detail
router.post("/", controller.CreateUser ); // create user data
router.get("/", controller.User ); // get all data user


module.exports = router;