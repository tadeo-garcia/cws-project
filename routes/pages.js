const express = require('express');

const router = express.Router();
const app = express();
const csrfProtection = require("csurf")({ cookie: true })
db = require('../db/models');
const { Event, User, EventType } = db;


app.use(express.json());
// app.use('view engine', 'pug');

router.get('/events', csrfProtection, async (req, res) => {
  if (req.user) {
    res.render('events-signout')
  }
  res.render('events');
})

router.get('/events/:id', csrfProtection, async (req,res)=>{
  const eventId = req.params.id
  console.log(eventId);
  const event = await Event.findAll({
    where: {id: eventId},
      include: [
          { model: User, as: 'host' },
          { model: EventType }
      ]
    })

  res.render('eventJoin', {event: event[0], csrfToken: req.csrfToken() });
})

router.get('/login', csrfProtection, (req, res) => {

  res.render('login', { csrfToken: req.csrfToken() });
});


router.get('/signup', csrfProtection, (req, res) => {

  res.render('signup', { csrfToken: req.csrfToken() });
});


router.get('/hosting', csrfProtection, async (req, res) => {
  if (!req.user) {
    res.render('login-first')
    return;
  }
  res.render('hosting');
})

router.get('/dashboard', csrfProtection, async (req, res) => {

  res.render('dashboard')
})

router.get('/', csrfProtection, (req, res) => {
  if (req.user) {
    res.redirect('/dashboard');
    return;
  }
// git s  res.render('home')
})

router.get('*', (req, res) => {
  res.render('error-page')
});

module.exports = router
