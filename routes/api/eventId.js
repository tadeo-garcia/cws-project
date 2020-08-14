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

  res.json({ event })
}))


router.post('/userEvent',
  routeHandler(async (req, res, next) => {
    const eventId = Number(req.headers.referer.match(/\d+$/)[0]);
    const { token } = req.cookies;
    // console.log(req.cookies)
    // console.log(req.body)
    // console.log(token)
    const user = await getUserFromToken(token);

    console.log('~~~~~~')
    console.log(eventId)
    //   console.log(eventId)

    const userEvent = await UserEvent.create({
      eventId,
      userId: user.id
    });
    res.json({ id: userEvent, user: user })
  }));

module.exports = router