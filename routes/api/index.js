const express = require('express');
const router = express.Router();
const {environment} = require('../../config')

const usersRouter = require('./users');

router.use('/users', usersRouter);

router.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = environment === 'production';
    if (!isProduction) console.log(err);
    res.json({
        title: err.title | "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    })
});

module.exports = router