const express = require("express");
const router = express.Router();

const Login = require("../controller/authController.js");
const VerifyToken = require("./verifiToken.js");
const VerifyUser = require("./verifiToken.js");
const VerifyAdmin = require('./verifiToken.js');

router.post("/login", Login );
router.post("/login/Admin", Login, VerifyAdmin );




module.exports = router;

