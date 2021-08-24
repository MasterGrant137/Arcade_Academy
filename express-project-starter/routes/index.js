const express = require('express');
const router = express.Router();
const { Game } = require('../db/models');
const { asyncHandler } = require('./utils');



/* GET home page. */
router.get('/', asyncHandler( async (req, res, next) => {
  const games = await Game.findAll({ limit: 8 });

  res.render('home.pug', { title: 'Arcade Academy', games });
}));

module.exports = router;
