const Hotels = require("../model/HotelsModel.js") // model

class HotelsController {

   async CreateHotels(req, res) {
      const newHotels = new Hotels(req.body);
      try{
        const saveHotels = await newHotels.save();
        res.status(200).json(saveHotels);
      } catch (err) {
        res.status(500).json(err)
      }
    };
    // get all hotels
    async hotels(req, res, next) {
         try {
          const hotels = await Hotels.find(req.query);
          res.status(200).json(hotels);
        } catch(err) {
          res.status(500).json(err);
        }
    }
    // update hotels
    async UpdateHotels(req, res) {
        try {
            const updateHotels = await Hotels.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateHotels);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    // get hotel by ID
    async DetailHotels(req, res) {
         try {
          const hotels = await Hotels.findById(req.params.id);
          res.status(200).json(hotels);
        } catch(err) {
          res.status(500).json(err);
        }
    }
    async DeleteHotels(req, res) {
      try {
            const deleteHotels = await Hotels.findOneAndDelete(req.params.id)
            res.status(200).json({message: "Deleted"});
        } catch (err) {
            res.status(500).json(err);
        }
    }
    async CountByCity(req, res) {
      const cities = req.query.cities.split(',')
      try {
        const list = await Promise.all(cities.map(city => {
          return Hotels.countDocuments({city: city})
        }));
        res.status(200).json(list)
      } catch {
        res.status(500).json(err);
      }
    }
    async CountByType(req, res) {
      const types = req.query.types.split(',')
      try {
        const list = await Promise.all(types.map(type => {
          return Hotels.countDocuments({type: type})
        }));
        res.status(200).json(list)
      } catch {
        res.status(500).json(err);
      }
    }
}

module.exports = new HotelsController;