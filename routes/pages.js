const express = require('express');

const router = express.Router();
const app = express();
const csrfProtection = require("csurf")({ cookie: true })
db = require('../db/models');
const { Event, User, EventType, UserEvent } = db;
const { Op } = require('sequelize');


app.use(express.json());
// app.use('view engine', 'pug');

router.get('/events', csrfProtection, async (req, res) => {
  if (req.user) {
    res.render('events-signout')
  }
  res.render('events');
})

router.get('/events/:id', csrfProtection, async (req, res) => {
  const eventId = req.params.id
  console.log(eventId);
  const event = await Event.findAll({
    where: { id: eventId },
    include: [
      { model: User, as: 'host' },
      { model: EventType }
    ]
  })

  if (!req.user) { res.render('join-event', { event: event[0], csrfToken: req.csrfToken() }); }

  res.render('join-event-loggedin', { event: event[0], csrfToken: req.csrfToken() });
})

router.get('/login', csrfProtection, (req, res) => {

  res.render('login', { csrfToken: req.csrfToken() });
});


router.get('/signup', csrfProtection, (req, res) => {

  res.render('signup', { csrfToken: req.csrfToken() });
});


router.get('/events/hosting', csrfProtection, async (req, res) => {
  const types = await EventType.findAll();

  if (!req.user) {
    res.render('login-first')
    return;
  }
  res.render('hosting', { types });
})

router.get('/dashboard/hosted', csrfProtection, async (req, res) => {
  const userId = req.user.id
  const user = await User.findByPk(userId, {
    include: [
      { model: Event }
    ]
  })

  const userEvents = user.Events
  const eventIds = []
  userEvents.forEach(event => {
    eventIds.push(event.id)
  })

  // console.log(eventIds)

  const events = await Event.findAll({
    where: {
      id: {
        [Op.in]: eventIds
      }
    },
    include: [
      { model: User, as: 'host' },
      { model: EventType }
    ]
  })



  res.render('dashboard-host', { user, events })
})


router.get('/dashboard', csrfProtection, async (req, res) => {
  const idUser = req.user.id

  const userEvents = await UserEvent.findAll({
    where: {
      userId: idUser
    }
  })

  const user = await User.findByPk(idUser, {
    include: [
      { model: Event }
    ]
  })

  const eventIds = []
  userEvents.forEach(userEvent => {
    eventIds.push(userEvent.dataValues.eventId)
  })

  console.log(eventIds)

  const events = await Event.findAll({
    where: {
      id: {
        [Op.in]: eventIds
      }
    },
    include: [
      { model: User, as: 'host' },
      { model: EventType }
    ]
  })

  res.render('dashboard', { user, events })
})


router.get('/dashboard/account', csrfProtection, async (req, res) => {
  const idUser = req.user.id
  const user = await User.findByPk(idUser, {
    include: [
      { model: Event }
    ]
  })
  res.render('edit-account', { user });
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