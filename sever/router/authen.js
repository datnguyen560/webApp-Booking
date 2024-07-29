const express = require("express");
const router = express.Router();

const Login = require("../controller/authController.js");
const VerifyToken = require("../utils/verifiToken.js");
const VerifyUser = require("../utils/verifiToken.js");
const VerifyAdmin = require('../utils/verifiToken.js');

router.post("/login", Login );
router.post("/login/Admin", Login, VerifyAdmin );
router.post("/logout", (req, res, next) => {
    res.clearCookie('access_token');
    res.status(200).send({ message: 'Logged out successfully' });
})



module.exports = router;

