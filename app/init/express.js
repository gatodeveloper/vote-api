var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const session = require('express-session');


//var indexRouter = require('../../routes/index');
var newsRoutes = require('../modules/news/routes/news.routes');
var usersRoutes = require('../modules/users/routes/users.routes');


var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(bodyParser.raw({
  inflate: true,
  limit: '100kb',
  type: 'application/octet-stream'
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false
// }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/news', newsRoutes);
app.use('/users', usersRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({})
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