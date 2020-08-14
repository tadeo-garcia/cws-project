const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { routeHandler, handleValidationErrors } = require("../utils");
const csrfProtection = require("csurf")({ cookie: true });

db = require("../../db/models");
const { Event, User, EventType, UserEvent } = db;

router.get('/event/:id', handleValidationErrors, routeHandler(async (req, res, next) => {
    
    const eventId = 1 // req.params.id
    const event = await Event.findByPk({
        eventId,
        include: [
            User,
            EventType
        ]
    })

    res.json({ event })
}))

module.exports = router