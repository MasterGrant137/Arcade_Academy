var express = require('express');
var router = express.Router();
const db = require("../db/models")
const { csrfProtection, asyncHandler} = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', csrfProtection, asyncHandler (async(req, res) => {
  res.render("register.pug", { csrfToken: req.csrfToken(), title: "Register" });
}));



module.exports = router;
