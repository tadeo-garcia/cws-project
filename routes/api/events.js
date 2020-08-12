const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { routeHandler, handleValidationErrors } = require("../utils");
const csrfProtection = require("csurf")({ cookie: true });

db = require("../../db/models");
const { Event, User, EventType, UserEvent } = db;

router.get('/', handleValidationErrors, routeHandler(async (req, res, next) => {
    const events = await Event.findAll({
        include: [{ model: EventType },

        //  { model: UserEvent, where: {eventId: Event.id }}
            // { model: UserEvent, where: }
            //  where: match userevent to event???}
            // , through: { model: UserEvent } }
        ]})
    res.json({ events })
}))

module.exports = router