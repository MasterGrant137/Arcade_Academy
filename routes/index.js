const express = require('express');
const router = express.Router();
const { Game } = require('../db/models');
const { asyncHandler } = require('./utils');



// GET home page.
router.get('/', asyncHandler( async (req, res, next) => {
  let userId;
  if(req.session.auth){
    userId = req.session.auth.userId
  }
  const games = await Game.findAll({ limit: 8 });
  if(userId){
    res.render('home.pug', { title: 'Arcade Academy', games, userId });
  }else{
    res.render('home.pug', { title: 'Arcade Academy', games });
  }
}));

module.exports = router;
