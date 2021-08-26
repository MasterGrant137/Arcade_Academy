var express = require('express');
var router = express.Router();
const db = require("../db/models")
const { User } = require('../db/models')
const { csrfProtection, asyncHandler} = require('./utils');
const {  loginUser, logoutUser, requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


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
  const { fullName, screenName, email, password } = req.body

  const user = User.build({
    fullName,
    screenName,
    email
  })

  const validationErrors = validationResult(req)
  if(validationErrors.isEmpty()){
    const hashedPassword = await bcrypt.hash(password, 10)
    user.hashedPassword = hashedPassword
    await user.save()
    loginUser(req, res, user)
    res.redirect('/')
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

// login page
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

router.get('/:id(\\d+)/gameList', requireAuth, asyncHandler (async(req, res) => {
  const userId = req.params.id;
  console.log(userId);
}))

router.post('/:id(\\d+)/gameList', requireAuth, asyncHandler (async(req, res) => {
  console.log("I'm working");
}));

router.get('/userProfile', csrfProtection, asyncHandler (async(req, res) => {
  res.render("userProfile.pug", {title: "userProfile" });
}));

module.exports = router;
