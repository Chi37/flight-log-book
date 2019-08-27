const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');

//Configures dotenv. whatever code from dotenv and hittng config
require('dotenv').config()
const app = express();

//Require the db config file (connect to DB)
require('./config/database');
//configure passport
require('./config/passport');

const indexRouter = require('./routes/index');
const studentsRouter = require('./routes/students');
const lessonRouter = require('./routes/lessons')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
//session middleware
app.use(session({
  secret: 'skyhawk',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize()); 
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', studentsRouter);
app.use('/lessons', lessonRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
