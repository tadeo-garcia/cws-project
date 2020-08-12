const express = require('express');

const router = express.Router();
const app = express();
const csrfProtection = require("csurf")({ cookie: true })
db = require('../db/models');
const { Event, User } = db;


app.use(express.json());
// app.use('view engine', 'pug');

router.get('/login', csrfProtection, (req, res) => {
  res.render('login', { csrfToken: req.csrfToken() });
});
router.get('/signup', csrfProtection, (req, res) => {
  res.render('signup', { csrfToken: req.csrfToken() });
});

router.get('/events', csrfProtection, async(req, res) => {

  res.render('events');
})

router.get('*', (req, res) => {
  res.render('error-page')
});

module.exports = router