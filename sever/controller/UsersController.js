const User = require("../model/UsersModel.js") // model
const bcrypt = require('bcryptjs');

class UsersController {
   async CreateUser(req, res) {
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(req.body.password, salt);
     const newUser = new User({
       username: req.body.username,
       email: req.body.email,
       sex: req.body.sex,
       password: hash,
       isAdmin: req.body.isAdmin,
      });
      try{
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
      } catch (err) {
        res.status(500).json({mesaage: "Email và username đã tồn tại"})
      }
    };
    // get all User
    async User(req, res) {
         try {
          const user = await User.find();
          res.status(200).json(user);
        } catch(err) {
          res.status(500).json(err);
          console.log("có lỗi nha")
        }
    }
    // update User
    async UpdateUser(req, res) {
        // res.send("id hotel - " + req.params.id);
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    // get hotel by ID
    async DetailUser(req, res) {
         try {
          const user = await User.findById(req.params.id);
          res.status(200).json(user);
        } catch(err) {
          res.status(500).json(err);
        }
    }
    async DeleteUser(req, res) {
      try {
            const deleteUser = await User.findOneAndDelete(req.params.id)
            res.status(200).json({message: "Deleted"});
        } catch (err) {
            res.status(500).json(err);
            console.log("có lõi")
        }
    }
}

module.exports = new UsersController;