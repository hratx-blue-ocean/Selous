const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');
const path = require('path');

const app = express();

// open up CORS
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// You can place your routes here, feel free to refactor:
const { db } = require('./routes');
const api = require('./routes/api.js');

app.use('/db', db);
app.use('/apiRequest', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next();
});

module.exports = app;
