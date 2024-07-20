const express = require("express");
const router = express.Router();

const Login = require("../controller/authController.js");
const VerifyToken = require("./verifiToken.js");
const VerifyUser = require("./verifiToken.js");
const VerifyAdmin = require('./verifiToken.js');

router.post("/login", Login );
router.post("/login/Admin", Login, VerifyAdmin );
router.get("/checkAuth", VerifyToken, ( req, res ) => {
    res.send("bạn đã đăng nhập thành công")
} );
router.get("/checkUser/:id", VerifyUser, ( req, res ) => {
    res.send("bạn đã đăng nhập thành công và có thể xóa tài khoản của bạn")
} );
router.get("/checkAdmin/:id", VerifyAdmin, ( req, res ) => {
    res.send("bạn đã đăng nhập thành công và có thể xóa tất cả tài khoản của bạn")
} );



module.exports = router;

