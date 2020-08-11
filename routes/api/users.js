const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../../config').jwtConfig;
const db = require('../../db/models');
const { Op } = require('sequelize');
const { User } = db;
const { routeHandler } = require('../utils');
const { getUserToken } = require('../utils/auth');

router.get('/', (req, res) => {
  res.send('From Users Router')
});

router.post('/', (req, res, next) => {
  const { username, email, password } = req.body;
  const user = await User.create({
    userName,
    password,
    email 
  });
  
  const token = await getUserToken(user);

  res.cookie('token', token, { maxAge: expiresIn * 1000 });

  res.json({ id: user.id, token });
});
 
router.post('/token', routeHandler(async (req, res, next) => {
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
    const err = new Error('Invalid email or password.')
    err.status = 401;
    err.title = "Unauthorized";
    console.log(err);
    throw err
  }

  const token = await getUserToken(user);

  res.cookie('token', token, { maxAge: expiresIn * 1000 }); 

  res.json({ id: user.id, token });
}));

module.exports = router; 