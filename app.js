const express = require('express');
const app = express();
const morgan = require('morgan');
const csrfProtection = require('csurf')({ cookie: true });

app.set('view engine', 'pug');

app.use("/public", express.static('public'));
app.use(csrfProtection);
app.use(morgan('dev'));
app.use(require('cookie-parser')());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setTimeout(1000);
  req.setTimeout(1000);
  next();
});

app.get('/', (req, res) => {
  res.render('layout')
})

app.use((req, res, next) => {
  res.render('error-page');
});

module.exports = app;