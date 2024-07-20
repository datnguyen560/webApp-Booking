const express = require("express");
const router = express.Router();

const controller = require("../controller/roomsController.js")

// rooms
router.post("/", controller.CreateRooms ); // create hotel data
router.put("/:id", controller.UpdateRooms ); // update hotel data 
router.get("/:id", controller.DetailRooms ); // get hotel detail
router.delete("/:id", controller.DeleteRooms ); // delete hotel detail
router.get("/", controller.Rooms ); // get all data hotel


module.exports = router;