const express = require('express');
const router = express.Router();
const { routeHandler, handleValidationErrors } = require('../utils');
const { getUserToken } = require('../utils/auth');

const csrfProtection = require("csurf")({ cookie: true })

const bcrypt = require('bcryptjs')
const { expiresIn } = require('../../config').jwtConfig;
const db = require('../../db/models');
const { Op } = require('sequelize');
const { User } = db;

const { check } = require('express-validator');

const validateUsername = [
  check("userName").exists()
];

const validateAuthFields = [
  check("userName", "Username field must be between 5 and 70 characters")
    .isLength({ min: 5, max: 70 }),
  check("email", "Email field must be a valid email")
    .exists()
    .isEmail(),
  check("password", "Password field must be 6 or more characters")
    .exists()
    .isLength({ min: 6, max: 70 }),
  check('password2', 'Confirm password field must have the same value as the password field')
    .exists()
    .custom((value, { req }) => value === req.body.password)
]

router.get('/', (req, res) => {
  res.render('layout.pug')
});

router.post('/',
  csrfProtection,
  validateUsername,
  validateAuthFields,
  handleValidationErrors,
  routeHandler(async (req, res, next) => {

    const { userName, email, fullName, password } = req.body;
    const user = await User.create({
      userName,
      fullName,
      hashedPassword: bcrypt.hashSync(password, 10),
      email
    });

    const token = await getUserToken(user);
    res.cookie('token', token, { maxAge: expiresIn * 1000 });

    res.json({ id: user.id, token });
  }));

router.post('/token',
  csrfProtection,
  validateUsername,
  handleValidationErrors,
  routeHandler(async (req, res, next) => {
    // res.json({ message: 'test' })
    const { userName, password } = req.body;

    const user = await User.findOne({
      where: {
        [Op.or]: [
          { userName },
          { email: userName }
        ]
      }
    });
    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
      // console.log('HERE IS THE USER' + user)
      const err = new Error('Invalid user name or password.')
      err.status = 401;
      err.title = "Unauthorized";
      console.log(err);
      throw err
    }

    const token = await getUserToken(user);

    res.cookie('token', token, { maxAge: expiresIn * 1000 });

    res.json({ id: user.id, token });
  }));

router.delete('/session', routeHandler(async (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'success' });
}));


router.get('/token', routeHandler(async (req, res, next) => {
  if (req.user) {
    return res.json({
      id: req.user.id,
      userName: req.user.userName
    });
  }
  const err = new Error('Invalid token');
  err.status = 401;
  next(err);
}));

router.post('/token-demo',
  csrfProtection,
  validateUsername,
  handleValidationErrors,
  routeHandler(async (req, res, next) => {
    // res.json({ message: 'test' })
  
    
    const demoUser = await User.findByPk(1)
    console.log(demoUser); 

    if (!demoUser) {
      // console.log('HERE IS THE USER' + user)
      const err = new Error('Invalid user name or password.')
      err.status = 401;
      err.title = "Unauthorized";
      console.log(err);
      throw err
    }

    const token = await getUserToken(demoUser);

    res.cookie('token', token, { maxAge: expiresIn * 1000 });

    res.json({ id: demoUser.id, token });
  }));



module.exports = router; 