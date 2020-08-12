const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { routeHandler, handleValidationErrors } = require("../utils");
const csrfProtection = require("csurf")({ cookie: true });

db = require("../../db/models");
const { Event, User } = db;

router.get('/', handleValidationErrors, routeHandler(async (req, res, next) => {
    const events = await Event.findAll(
        {include: EventType}
    )
    console.log(events)
    res.json({events})
    // console.log(response)
}))

module.exports = router