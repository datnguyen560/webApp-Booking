const Rooms = require("../model/RoomsModel.js") // model

class RoomsController {

   async CreateRooms(req, res) {
      const newRooms = new Rooms(req.body);
      try{
        const saveRooms = await newRooms.save();
        res.status(200).json(saveRooms);
      } catch (err) {
        res.status(500).json(err)
      }
    };
    // get all Rooms
    async Rooms(req, res, next) {
         try {
          const rooms = await Rooms.find();
          res.status(200).json(rooms);
        } catch(err) {
          res.status(500).json(err);
        }
    }
    // update Rooms
    async UpdateRooms(req, res) {
        try {
            const updateRooms = await Rooms.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateRooms);
        } catch (err) {
            res.status(500).json(err);
            console.log("có lõi")
        }
    }
    // get hotel by ID
    async DetailRooms(req, res) {
         try {
          const rooms = await Rooms.findById(req.params.id);
          res.status(200).json(rooms);
        } catch(err) {
          res.status(500).json(err);
        }
    }
    async DeleteRooms(req, res) {
      try {
            const deleteRooms = await Rooms.findOneAndDelete(req.params.id)
            res.status(200).json({message: "Deleted"});
        } catch (err) {
            res.status(500).json(err);
            console.log("có lõi")
        }
    }
}

module.exports = new RoomsController;