const express = require('express');
const router = express.Router();

const csrfProtection = require("csurf")({ cookie: true })

router.get('/login', csrfProtection, (req, res) => {
  res.render('login');
});
router.get('/signup', csrfProtection, (req, res) => {
  res.render('signup');
});

router.get('/events', csrfProtection, (req, res) => {
  res.render('events')
})

router.get('*', (req, res) => {
  res.render('error-page')
});

module.exports = router