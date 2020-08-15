const express = require('express');
const router = express.Router();

const { getUserFromToken } = require('../utils/auth.js')
const { check } = require('express-validator');
const { routeHandler, handleValidationErrors } = require("../utils");
const csrfProtection = require("csurf")({ cookie: true });
db = require("../../db/models");
const { Event, User, EventType, UserEvent } = db;

router.delete('/hosted/:id', routeHandler(async (req, res) => {
    console.log('Delete in dashboard', req.params.id)
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

module.exports = router