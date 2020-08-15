const express = require('express');
const router = express.Router();

const { getUserFromToken } = require('../utils/auth.js')
const { check } = require('express-validator');
const { routeHandler, handleValidationErrors } = require("../utils");
const csrfProtection = require("csurf")({ cookie: true });
db = require("../../db/models");
const { Event, User, EventType, UserEvent } = db;


router.post('/hostEvent', routeHandler(async (req, res, next) => {
    const { token } = req.cookies;
    const user = await getUserFromToken(token);
    const hostId = user.id
    const { _csrf, date, time, eventTypeId, capacity, description } = req.body;
    const newEvent = await Event.create({
        eventTypeId,
        date,
        time,
        userId: null,
        hostId,
        capacity,
        description
    })
    res.json({ message: 'success' });
}))

router.delete('/hosted/:id', routeHandler(async (req, res) => {
    // console.log('Delete in dashboard', req.params.id)
    const event = await Event.findByPk(req.params.id)

    if (!event) {
        const err = new Error("Event not found.");
        err.status = 404;
        next(err);
        return;
    }

    await event.destroy();
    res.json({ message: 'success' });
}));

router.delete('/userEvent/:id', routeHandler(async (req, res) => {
    const { token } = req.cookies;
    const user = await getUserFromToken(token);
    const eventId = Number(req.params.id)
    const userId = Number(user.id)
    console.log('~~~~')
    console.log(userId)
    console.log(eventId)
    console.log('~~~~')
    const userEvent = await UserEvent.findAll({
        where: {
            eventId: eventId,
            userId: userId,
        }
    });
    console.log('~~~~')
    console.log(userEvent)
    console.log('~~~~')
    await userEvent[0].destroy();
    res.json({ message: 'success' });
}));

module.exports = router