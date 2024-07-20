const express = require("express");
const router = express.Router();

const controller = require("../controller/hotelsController.js")

router.get("/hotels/countByCity", controller.CountByCity);
router.get("/hotels/countByType", controller.CountByType);

// hotels
router.post("/hotels", controller.CreateHotels ); // create hotel data
router.put("/hotels/:id", controller.UpdateHotels ); // update hotel data 
router.delete("/hotels/:id", controller.DeleteHotels ); // delete hotel detail
router.get("/hotels/:id", controller.DetailHotels ); // get hotel detail
router.get("/hotels", controller.hotels ); // get all data hotel


module.exports = router;