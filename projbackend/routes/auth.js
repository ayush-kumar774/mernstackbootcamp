var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator');
const { isLength } = require('lodash');
const { signout, signup } = require("../controllers/auth")


router.post("/signup", [
                check("name", "name should be at least 3 characters").isLength({ min : 3 }),
                check("email", "email is required").isEmail(),
                check("password", "password should be at least 5 characters").isLength({ min : 5 }) 
        ], 
        signup
);

router.get("/signout", signout);

module.exports = router;