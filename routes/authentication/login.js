const router = require("express").Router();
const { Login } = require("../../controller/authentication/login")
const {check,validationResult}=require("express-validator");


router.post("/",[check("email","email is required").isEmail(),
check("password", "enter password").isLength({min:1})], Login);

module.exports = router;
