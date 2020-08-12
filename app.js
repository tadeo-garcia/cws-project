const express = require('express');
const app = express();
const morgan = require('morgan');

const apiRouter = require('./routes/api');
const pagesRouter = require('./routes/pages');

app.set('view engine', 'pug');

// app.use(csrfProtection);
app.use(morgan('dev'));
app.use(require('cookie-parser')());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setTimeout(1000);
  req.setTimeout(1000);
  next();
});

const { getUserFromToken } = require("./routes/utils/auth");

app.use(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return next();

  const user = await getUserFromToken(token, res);
  if (user) req.user = user;
  else res.clearCookie('token');
  next();
});

app.use("/public", express.static('public'));
app.use('/api', apiRouter);
app.use('/', pagesRouter);


app.use((req, res, next) => {
  res.render('error-page');
});


module.exports = app;