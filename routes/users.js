var express = require('express');
var router = express.Router();
const db = require("../db/models")
const { User, GameList, Game, Review, Like } = require('../db/models')
const { csrfProtection, asyncHandler} = require('./utils');
const {  loginUser, logoutUser, requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { route } = require('./games');



const userValidators = [
  check("fullName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide your first name")
    .isLength({ max: 100 })
    .withMessage("First name must not be longer than 100 characters"),
  check("screenName")
    .exists({checkFalsy:true})
    .withMessage("Please provide a screen name")
    .isLength({ max: 20})
    .withMessage("Screen name must not be longer than 20 characters"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide your email address")
    .isLength({ max: 255 })
    .withMessage("Email address cannot be longer than 255 characters")
    .isEmail()
    .withMessage("Email address must be valid")
    .custom((value) => {
      return User.findOne({
        where: {
          email: value,
        },
      }).then((user) => {
        if (user) {
          return Promise.reject("Email already in use");
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password")
    .isLength({ max: 50 })
    .withMessage("Password cannot be longer than 50 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
    .withMessage(
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, a number, and a special character(i.e. "!@#$%^&*")'
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your password")
    .isLength({ max: 50 })
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', csrfProtection, asyncHandler (async(req, res) => {
  console.log(req.session)
  res.render("newUserAccount.pug", { csrfToken: req.csrfToken(), title: "Register" });
}));

router.post('/register', csrfProtection, userValidators, asyncHandler(async(req, res) => {
  const { fullName, screenName, email, password, profilePic } = req.body
  console.log("==========",profilePic)


  const user = User.build({
    fullName,
    screenName,
    email,
    profileImage: profilePic
  })

  const validationErrors = validationResult(req)
  if(validationErrors.isEmpty()){
    const hashedPassword = await bcrypt.hash(password, 10)
    user.hashedPassword = hashedPassword
    await user.save()
    loginUser(req, res, user)
  }else{
    const errors = validationErrors.array().map((error) => error.msg)
    res.render('newUserAccount.pug', {
      title: 'Register',
      // user,
      fullName,
      screenName,
      email,
      errors,
      csrfToken: req.csrfToken()
    })
  }

}))

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true})
    .withMessage("Please provide your email address"),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your password')
]

// ========== login page================================
router.get('/login', csrfProtection, (req, res) => {
  res.render('signInForm.pug', { title: "Login", email: "",csrfToken: req.csrfToken()})
})

router.post('/login', csrfProtection, loginValidators, asyncHandler(async(req, res) => {
  const { email, password } = req.body
  const validationErrors = validationResult(req)


  if (validationErrors.isEmpty()) {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      console.log("HERE")

      if (user) {
          const isPassword = await bcrypt.compare(password, user.hashedPassword.toString());
          if (isPassword) {
            loginUser(req, res, user);

          }
          else {
            const errors = ["Password Incorrect"]
            res.render("signInForm.pug", {
              title: "Login",
              email,
              errors,
              csrfToken: req.csrfToken()
            })


          }
      }else{
           const errors = ["Could not find a User with that Email/Password"];
           res.render("signInForm.pug", {
             title: "Login",
             email,
             errors,
             csrfToken: req.csrfToken(),
           });
      }
  } else {
    const errors = validationErrors.array().map((error) => error.msg);
    res.render("signInForm.pug", {
      title: "Login",
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}))

router.post('/logout', (req, res) => {
  logoutUser(req, res)
  res.redirect('/')
})

// ======== Add/remove games to/from the active users played/unplayed games list ==============
router.post("/:id(\\d+)/userProfile",requireAuth,asyncHandler(async (req, res) => {
    // Add a game to the logged in users "Played" games section
    const userId = req.params.id
    const { played, wantToPlay } = req.body
    if(played){
      // console.log("PLAYED WORKS")
      // console.log(played)
      const gameId = played
      const game = await GameList.findOne({
        where: {
          user_id: userId,
          game_id: gameId,
        }
      })
      //if there is a gameList found do this
      if(game){
        if(game.have_played === false){
          game.have_played = true
          await game.save()
          res.status(204).send()
        }else{
          res.status(204).send();
        }
      }else{ //if there is no gameList found do this
        const newGameList = await GameList.create({
          user_id: userId,
          game_id: gameId,
          have_played: true
        })
        res.status(204).send()
      }
    }
    // Add a game to the logged in users "Played" games section
    if(wantToPlay){
      const gameId = wantToPlay
      // console.log("WTP WORKS")
      const game = await GameList.findOne({
        where:{
          user_id: userId,
          game_id: gameId,
        }
      })
      if(game){ //if there is a gameList found do this
        if(game.have_played === true){
          game.have_played = false
          await game.save()
          res.status(204).send()
        }else{
          res.status(204).send()
        }
      }else{ //if there is no gameList found do this
        const newGameList = await GameList.create({
          user_id: userId,
          game_id: gameId,
          have_played: false,
        });
        res.status(204).send();
      }
    }
  })
);

// Log in the Demo User
router.post("/demoUser", asyncHandler(async(req,res) => {
  const demoUser = await User.findByPk(1)
  loginUser(req, res, demoUser)
  // res.redirect('/')
}))

// === Navigate to the active users profile page ===================================
router.get("/:id(\\d+)/userProfile",requireAuth,csrfProtection,asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    const playedGamesList = await GameList.findAll({
      where:{
        user_id: userId,
        have_played: true
      },
      include: Game
    });
    const wtpGamesList = await GameList.findAll({
      where:{
        user_id: userId,
        have_played: false

      },
      include: Game
    });
    const reviews = await Review.findAll({
      where:{
        user_id: userId,
      },
      include: Game
    });
    // console.log(wtpGamesList[0])
    
    res.render("userProfile.pug", { title: `${user.screenName}'s Profile`, user, playedGamesList, wtpGamesList, reviews, userId });
  })
);

// Delete a game from the users 'Played' or 'Want to Play' list
router.post("/:id(\\d+)/userProfile/delete", requireAuth, asyncHandler(async(req, res) => {
  //  console.log(req.body)  
  // console.log(user_id, game_id)
  const { user_id, game_id} = req.body
  const gameList = await GameList.findOne({
    where: {
      user_id,
      game_id
    }
  })
  await gameList.destroy()
  //  res.json({"message": "Successful"})
  res.status(204).send()
}));

// Delete a game from the users 'Played' or 'Want to Play' list
router.delete("/:id(\\d+)/userProfile", asyncHandler(async(req, res, next)=> {
  // console.log(req)
  const { user_id, game_id } = req.body
  const gameList = await GameList.findOne({
    where: {
      user_id,
      game_id
    }
  })
  await gameList.destroy()
  res.json({"message": "Successful"})
}));

// Delete a Review that a user previously made
router.delete("/:id(\\d+)/review", asyncHandler(async(req, res, next)=>{
  const { user_id, reviewId } = req.body;
  // console.log(reviewId)
  const allLikes = await Like.findAll({
    where:{
      review_id: reviewId
    }
  })
  allLikes.forEach(async(like) => {
    await like.destroy()
  })
  const review = await Review.findByPk(reviewId);
  // console.log(review)
  await review.destroy();
  res.json({"message": "Successful"})
}));


module.exports = router;
