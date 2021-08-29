const express = require('express');
const router = express.Router();
const { Game, Review, User, Like } = require('../db/models');
const { asyncHandler } = require('./utils');
const { csrfProtection } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// hardcoded list of genres
// delete?
const genres = ['Action', 'Action-adventure', 'Adventure', 'RPG', 'Simulation', 'First-person Shooter', 'Sports', 'MMO', ]

// GET /games
router.get('/', asyncHandler( async (req, res, next) => {
  const games = await Game.findAll();
  if(req.session.auth){
    const userId = req.session.auth.userId;
    res.render('gameCollection.pug', { title: 'Arcade Academy', games, userId });
  }else{
    res.render('gameCollection.pug', { title: 'Arcade Academy', games });
  }
}));

// GET games/:id
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
    // retreive all the likes/dislikes for the game in question
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
    // console.log(allLikes,allDislikes);
    // console.log(allLikes.length, allDislikes.length)
    // subtract dislikes from likes to get score, return score
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

// ======== Post a new review ======================
// POST games/:id
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
  // console.log('================>', userReview)
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
    // =============== for comment simulation. (see public/javascripts/index.js)
    // window.document.getElementById('review-textbox').value = "";
    // return res.render('game.pug', { game, reviews, gameId, csrfToken:req.csrfToken() });
    res.redirect("back");
  } else {
    const errors = validationErrors.array().map(error => error.msg)
    return res.render('game.pug', { game, reviews, gameId, csrfToken:req.csrfToken(), errors });
  }
}));

// Add a like to a review
router.post('/:id(\\d+)/likes', requireAuth ,csrfProtection,asyncHandler(async(req, res) => {
  //get the user who is logged in (or check if they are logged in)
  const {like, dislike} = req.body
  const userId = req.session.auth.userId
  // console.log(userId)
  // console.log(like)
  // if this action was a 'like' and users opinion of this game is not already 'like', change it to like
  if(like){
    const review_id = like
    const currLike = await Like.findOne({
      where: {
        user_id: userId,
        review_id,
      }
    })
    // console.log(currLike)
    if(currLike){
      if(currLike.like === false){
        currLike.like = true
        await currLike.save()
        // res.status(204).send()
        res.redirect("back");
      }else{
        res.status(204).send()
      }
    }else{
      const newLike = await Like.create({
        user_id: userId,
        review_id,
        like: true
      })
      // res.status(204).send()
      res.redirect("back");
    }
  }
  // if this action was a 'dislike' and users opinion of this game is not already 'dislike', change it to dislike
  if(dislike){
    const review_id = dislike
    const currLike = await Like.findOne({
      where: {
        user_id: userId,
        review_id,
      }
    })
    if(currLike){
      if(currLike.like === true){
        currLike.like = false
        await currLike.save()
        // res.status(204).send()
        res.redirect("back");
      }else{
        res.status(204).send()
      }
    }else{
      const newLike = await Like.create({
        user_id: userId,
        review_id,
        like: false
      })
      // res.status(204).send()
      res.redirect("back");
    }
  }
  // console.log(review_id)
  // res.status(204).send()
}))


// GET games/top10 ====================
router.get('/topGames', asyncHandler(async(req,res) => {
  const topGames = await Game.findAll({ limit: 10 });
  let userId;
  if (req.session.auth) {
    userId = req.session.auth.userId;
  }
  // console.log(userId)

  res.render('topTen.pug', {
    title: 'Top Games',
    topGames,
    userId
  })
}));

// GET games/top10 ====================
router.get('/categories', asyncHandler(async(req,res) => {
  res.render('gameCategories.pug', { title: `Games by Category`, genres })
}))



/*==================Route for Search==================*/

router.get('/searchPage', asyncHandler(async(req, res) => {
    let userId;
    const { term } = req.query;
    // console.log('THIS IS TERM: ' + term);
    // console.log('THIS IS REQ: ' + req.body.name);
    // let term;
    // console.log(term);

    // if (req.session.auth) userId = req.session.auth.userId;
    console.log('backend hit (games.js) ' + term);

    console.log('backend hit (games.js');
    // const term = 'Cll of Dty';
    // const games = await Game.findAll({ where: { name: { [Op.iLike]: `%${term}%` } } })
    const games = await Game.findAll({ where: { name: { [Op.iRegexp]: `[${term}]` } }, limit: 15 })
    res.render('filteredGames.pug', { games, userId })
    // else res.render('filteredGames.pug', { games })
}));




//=============Routes for categories===================//

// ==== ARCADE ====

router.get('/arcade', asyncHandler(async(req,res) => {
  let userId;
  if (req.session.auth) {
    userId = req.session.auth.userId;
  }
  const games = await Game.findAll({
    where: {
      genre: 'Arcade'
    }
  });
  if(userId){
    res.render('filteredGames.pug', { games, userId })
  }else{
    res.render('filteredGames.pug', { games })
  }
}));


// ==== ADVENTURE ====

router.get('/adventure', asyncHandler(async(req,res) => {
  let userId;
  if(req.session.auth){
    userId = req.session.auth.userId
  }
  const games = await Game.findAll({ where: {
    genre: 'Adventure'
  }})
   if (userId) {
     res.render("filteredGames.pug", { games, userId });
   } else { //* shouldn't the else just be { game } like the rest of them?
     res.render("filteredGames.pug", { games, userId: 1 });
   }
}));

// ==== RPG ====
router.get('/rpg', asyncHandler(async(req,res) => {
  let userId;
  if (req.session.auth) {
    userId = req.session.auth.userId;
  }
  const games = await Game.findAll({
    where: {
      genre: "Role-playing (RPG)",
    },
  });
  if(userId){
    res.render('filteredGames.pug', { games, userId })
  }else{
    res.render('filteredGames.pug', { games })
  }
}));

// ==== FPS ====
router.get('/fps', asyncHandler(async(req,res) => {
  let userId;
  if (req.session.auth) {
    userId = req.session.auth.userId;
  }
  const games = await Game.findAll({ where: {
    genre: 'Shooter'
  }})
   if (userId) {
     res.render("filteredGames.pug", { games, userId });
   } else {
     res.render("filteredGames.pug", { games });
   }
}));

// ==== SPORTS ====
router.get('/sports', asyncHandler(async(req,res) => {
  let userId;

  if (req.session.auth) {
    userId = req.session.auth.userId;
  }
  const games = await Game.findAll({
    where: {
      genre: 'Sport'
    }
  })
   if (userId) {
     res.render("filteredGames.pug", { games, userId });
   } else {
     res.render("filteredGames.pug", { games });
   }
}));

// ==== INDIE ====
router.get('/indie', asyncHandler(async(req,res) => {
  let userId;
  if (req.session.auth) {
    userId = req.session.auth.userId;
  }
  const games = await Game.findAll({ where: {
    genre: 'Indie'
  }})
  if (userId) {
    res.render("filteredGames.pug", { games, userId });
  } else {
    res.render("filteredGames.pug", { games });
  }
}));



module.exports = router;
