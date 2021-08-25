var express = require('express');
var router = express.Router();
const db = require("../db/models")
const { Review } = require('../db/models')
const { csrfProtection, asyncHandler} = require('./utils');
const {  loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');

const reviewsValidators = [
    check('content')
      .exists({ checkFalsy: true })
      .withMessage('Review field must not be empty')
      .isLength({ min: 15, max: 255 })
      .withMessage("Please keep reviews between 15 and 255 characters"),
    // If we impliment scoring system for games, radio button
    //  check('reviewScore')
    //   .exists({ checkFalsy: true })
    //   .withMessage('Gamescore must not be empty')
];

router.get("/", csrfProtection, asyncHandler (async(req, res, next)=> {
    console.log("--------->",req.body,"--------->");
    
    res.render('reviewForm.pug', { title: 'New Review', csrfToken: req.csrfToken() });
}));

module.exports = router;
