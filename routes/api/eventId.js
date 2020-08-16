const express = require('express');
const router = express.Router();

const { getUserFromToken } = require('../utils/auth.js')
const { check } = require('express-validator');
const { routeHandler, handleValidationErrors } = require("../utils");
const csrfProtection = require("csurf")({ cookie: true });
db = require("../../db/models");
const { Event, User, EventType, UserEvent } = db;


router.get('/event/:id', handleValidationErrors, routeHandler(async (req, res, next) => {

  const eventId = req.params.id
  const event = await Event.findByPk({
    eventId,
    include: [

      User,
      EventType
    ]
  })
  const users = await User.findAll({
    include: [Event, UserEvent],
    // where: { eventId: eventId }
  });
  console.log(users);
  res.json({ event, users })
}))


router.post('/userEvent', async (req, res, next) => {
  const eventId = req.body.eventId;

  // console.log(res)
  // const eventId = Number(req.headers.referer.match(/\d+$/)[0]);
  const { token } = req.cookies;
  const user = await getUserFromToken(token);
  const userEvent = await UserEvent.create({
    eventId,
    userId: user.id
  });
  res.json({ id: userEvent, user: user })
});

module.exports = router
