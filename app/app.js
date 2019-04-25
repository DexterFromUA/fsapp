var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

passport.use(new LocalStrategy(
    function (email, password, done) {
        console.log('EMAIL', email);
        usersController.findUser(email)
            .then(user => {
                console.log('USER', user)
            })
            .catch(e => console.log("ERROR", e))
    }
));

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'zaraffa',
    resave: true,
    saveUninitialized: true,
    cookie:{
        secure: true
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/login', require('./routes/index'));
app.use('/signup', require('./routes/signup'));
app.use('/admin', indexRouter);
app.use('/api', require('./routes/api'));
app.use('/error', function (req, res) {
    res.render('error')
});
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
