const express = require('express');
const router = express.Router();
const { Game } = require('../db/models');
const { asyncHandler } = require('./utils');
const csrfProtection = require('./utils');
const { check, validationResult } = require('express-validator');



const genres = ['Action', 'Action-adventure', 'Adventure', 'RPG', 'Simulation', 'First-person Shooter', 'Sports', 'MMO', ]

router.get('/', asyncHandler( async (req, res, next) => {
  const games = await Game.findAll();
  const userId = req.session.auth.userId;
  res.render('gameCollection.pug', { title: 'Arcade Academy', games, userId });
}));

router.get(`/:id(\\d+)`, csrfProtection, asyncHandler( async (req, res, next) => {
  const gameId = parseInt(req.params.id, 10);
  const game = await Game.findByPk(gameId);
  
  res.render('game.pug', { title: `AA-${game.name}`, game, csrfToken:req.csrfToken() });
}));


// form handling for submitting a new review on a given /game/:id page

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

router.post("/:id(\\d+)/new-review", csrfProtection, reviewsValidators, asyncHandler (async(req, res, next)=> {
  const gameId = parseInt(req.params.id, 10);
  const {content} = req.body;
  const newReview = await Review.create({
    content,
    game_id: gameId
  });



  // res.render('/:id(\\d+)', { title: `AA-${game.name}`, csrfToken: req.csrfToken() });
}));


router.get('/topGames', asyncHandler(async(req,res) => {
  const topGames = await Game.findAll({ limit: 10 });

  res.render('topTen.pug', {
    title: 'Top Games',
    topGames
  })
}));

router.get('/categories', asyncHandler(async(req, res) => {
  res.render('gameCategories.pug', { genres })

}))



//--------Routes for categories------------

router.get('/action', asyncHandler(async(req,res) => {
  const games = await Game.findAll({ where: {
    genre: 'Type1'
  }})

  res.render('filteredGames.pug', { games })

}));
router.get('/adventure', asyncHandler(async(req,res) => {
  const games = await Game.findAll({ where: {
    genre: 'adventure'
  }})

  res.render('filteredGames.pug', { games })

}));
router.get('/rpg', asyncHandler(async(req,res) => {
  const games = await Game.findAll({ where: {
    genre: 'rpg'
  }})

  res.render('filteredGames.pug', { games })

}));
router.get('/fps', asyncHandler(async(req,res) => {
  const games = await Game.findAll({ where: {
    genre: 'fps'
  }})

  res.render('filteredGames.pug', { games })

}));
router.get('/sports', asyncHandler(async(req,res) => {
  const games = await Game.findAll({ where: {
    genre: 'sports'
  }})

  res.render('filteredGames.pug', { games })

}));



module.exports = router;
