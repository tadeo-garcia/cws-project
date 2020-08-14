const express = require('express');

const router = express.Router();
const app = express();
const csrfProtection = require("csurf")({ cookie: true })
db = require('../db/models');
const { Event, User } = db;


app.use(express.json());
// app.use('view engine', 'pug');

router.get('/events', csrfProtection, async (req, res) => {
  if (req.user) {
    res.render('events-signout')
  }
  res.render('events');
})

router.get('/events/:id', csrfProtection, async (req,res)=>{
  // console.log(req.params.id)
  // const eventId = 1 // req.params.id
  // const event = await Event.findByPk({
  //     eventId,
      // include: [
      //     { model: User, as: 'host' },
      //     { model: EventType }
      // ]
  // })

  // res.json({ event })
  res.render('eventJoin');
})

router.get('/login', csrfProtection, (req, res) => {
  if (req.user) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login', { csrfToken: req.csrfToken() });
});


router.get('/signup', csrfProtection, (req, res) => {
  if (req.user) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup', { csrfToken: req.csrfToken() });
});

// router.get('/demouser', csrfProtection, (req, res) => {
//   if (!req.user) {
//     res.redirect('/login');
//     return;
//   }
//   res.render('hosting', { csrfToken: req.csrfToken() });
// });

router.get('/hosting', csrfProtection, async (req, res) => {
  if (!req.user) {
    res.redirect('/login')
    return;
  }
  res.render('hosting');
})

router.get('/dashboard', csrfProtection, async (req, res) => {
  if (!req.user) {
    res.redirect('/login')
    return;
  }
  res.render('dashboard')
})

router.get('/', csrfProtection, (req, res) => {
  if (req.user) {
    res.redirect('/dashboard');
    return;
  }
  res.render('home')
})

router.get('*', (req, res) => {
  res.render('error-page')
});

module.exports = router
