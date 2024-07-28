const express = require("express");
const User = require("../model/UsersModel.js") // model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

async function Login(req, res, next) {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) {
            return res.status(500).json({message: "User not found"})
        }
        const isPassword = await bcrypt.compare(req.body.password, user.password)
        if(!isPassword) {
            return res.status(500).json({message: "Wrong password"})
        }
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.ACCESS_TOKEN_SECRET)

        const {password, ...otherDetail} = user._doc
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({...otherDetail})
         next();
    } catch(err) {
        res.status(401).json({message:"lỗi xác thực"})
    }
  
}

module.exports = Login;