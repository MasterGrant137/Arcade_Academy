const express = require('express');
const router = express.Router();
const { Game, Review, User, Like } = require('../db/models');
const { asyncHandler } = require('./utils');
const { csrfProtection } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth')


const genres = ['Action', 'Action-adventure', 'Adventure', 'RPG', 'Simulation', 'First-person Shooter', 'Sports', 'MMO', ]

router.get('/', asyncHandler( async (req, res, next) => {
  const games = await Game.findAll();
  if(req.session.auth){

    const userId = req.session.auth.userId;
    res.render('gameCollection.pug', { title: 'Arcade Academy', games, userId });
  }else{

    res.render('gameCollection.pug', { title: 'Arcade Academy', games });
  }
}));

router.get(`/:id(\\d+)`, csrfProtection, asyncHandler( async (req, res, next) => {
  const gameId = parseInt(req.params.id, 10);

  const reviews = await Review.findAll({
    where: {
      game_id: gameId
    }
  });
  const game = await Game.findByPk(gameId);
  // console.log(reviews.length)

  for(i=0; i< reviews.length; i++) {
    const review = reviews[i];
    const reviewId = reviews[i].id;
    const allLikes = await Like.findAll({
      where: {
        review_id: reviewId,
        like:true
      }
    });
    const allDislikes = await Like.findAll({
      where: {
        review_id: reviewId,
        like:false
      }
    });
    console.log(allLikes,allDislikes);
    const score = allLikes.length-allDislikes.length;
    review.score = score;
  }

  res.render('game.pug', { game, gameId, reviews, csrfToken:req.csrfToken() });
}));


// form handling for submitting a new review on a given /game/:id page

const reviewsValidators = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Review field must not be empty')
    .isLength({ min: 15, max: 255 })
    .withMessage("Please keep reviews between 15 and 255 characters")
  // If we impliment scoring system for games, radio button
  //  check('reviewScore')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Gamescore must not be empty')
];


router.post("/:id(\\d+)", requireAuth, csrfProtection, reviewsValidators, asyncHandler(async(req, res)=> {
  const userId = req.session.auth.userId;
  const { gameId, content} = req.body;
  console.log(req.session);


  const reviews = await Review.findAll({
    where: {
      game_id: gameId
    }
  });

  const game = await Game.findByPk(gameId);

  const userReview = await Review.findOne({
    where: {
      game_id: gameId,
      user_id: userId
    }
  })
// console.log(userReview, '<==============================')
  const validationErrors = validationResult(req);

  if (userReview) {
    const errors = ['You have already posted a review'];
    return res.render('game.pug', { game, reviews, gameId, csrfToken:req.csrfToken(), errors });
  } else if (validationErrors.isEmpty()) {
    await Review.create({
      user_id: userId,
      content,
      game_id: gameId
    });
    // =============== This part needs work. Clearing out the text box after leaving a comment
    // =============== for comment simulation.
    // window.document.getElementById('review-textbox').value = "";
    // return res.render('game.pug', { game, reviews, gameId, csrfToken:req.csrfToken() });
    return res.status(204).send();
  } else {
    const errors = validationErrors.array().map(error => error.msg)
    return res.render('game.pug', { game, reviews, gameId, csrfToken:req.csrfToken(), errors });
  }

}));

router.post('/:id(\\d+)/likes', requireAuth ,csrfProtection,asyncHandler(async(req, res) => {
  const {like, dislike} = req.body
  const userId = req.session.auth.userId

  if(like){
    const review_id = like
    const currLike = await Like.findOne({
      user_id: userId,
      review_id,
    })
    if(currLike){
      if(currLike.like === false){
        currLike.like = true
        await currLike.save()
      }else{
        res.status(204).send()
      }
    }else{
      const newLike = await Like.create({
        user_id: userId,
        review_id,
        like: true
      })
      res.status(204).send()
    }
  }

  if(dislike){
    const review_id = dislike
    const currLike = await Like.findOne({
      user_id: userId,
      review_id,
    })

    if(currLike){
      if(currLike.like === true){
        currLike.like = false
        await currLike.save()
      }else{
        res.status(204).send
      }
    }else{
      const newLike = await Like.create({
        user_id: userId,
        review_id,
        like: false
      })
      res.status(204).send()
    }
  }



  // console.log(review_id)
  // res.status(204).send()
}))

router.get('/topGames', asyncHandler(async(req,res) => {
  const topGames = await Game.findAll({ limit: 10 });
  const userId = req.session.auth.userId
  console.log(userId)

  res.render('topTen.pug', {
    title: 'Top Games',
    topGames,
    userId
  })
}));

router.get('/categories', asyncHandler(async(req, res) => {
  res.render('gameCategories.pug', { genres })

}))



//--------Routes for categories------------

router.get('/action', asyncHandler(async(req,res) => {
  const userId = req.session.auth.userId
  const games = await Game.findAll({ where: {
    genre: 'Type1'
  }})

  res.render('filteredGames.pug', { games, userId })

}));
router.get('/adventure', asyncHandler(async(req,res) => {
  const userId = req.session.auth.userId
  const games = await Game.findAll({ where: {
    genre: 'adventure'
  }})

  res.render('filteredGames.pug', { games, userId })

}));
router.get('/rpg', asyncHandler(async(req,res) => {
  const userId = req.session.auth.userId
  const games = await Game.findAll({ where: {
    genre: 'rpg'
  }})

  res.render('filteredGames.pug', { games, userId })

}));
router.get('/fps', asyncHandler(async(req,res) => {
  const userId = req.session.auth.userId
  const games = await Game.findAll({ where: {
    genre: 'fps'
  }})

  res.render('filteredGames.pug', { games, userId })

}));
router.get('/sports', asyncHandler(async(req,res) => {
  const userId = req.session.auth.userId
  const games = await Game.findAll({ where: {
    genre: 'sports'
  }})

  res.render('filteredGames.pug', { games, userId })

}));



module.exports = router;
