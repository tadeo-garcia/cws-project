const express = require('express');

const router = express.Router();
const app = express();
const csrfProtection = require("csurf")({ cookie: true })
db = require('../db/models');
const { Event, User } = db;


app.use(express.json());
// app.use('view engine', 'pug');


router.get('/login', csrfProtection, (req, res) => {
  // if(user){
  //   redirect to events
  // }
  res.render('login', { csrfToken: req.csrfToken() });
});

router.get('/signup', csrfProtection, (req, res) => {
  // if(user)
  res.render('signup', { csrfToken: req.csrfToken() });
});

router.get('/events', csrfProtection, async(req, res) => {
  
  res.render('events');
})

router.get('/hosting', csrfProtection, async (req, res) => {

  res.render('hosting');
})

router.get('/', csrfProtection, (req, res)=>{
  res.render('home')
})

router.get('*', (req, res) => {
  res.render('error-page')
});

module.exports = router