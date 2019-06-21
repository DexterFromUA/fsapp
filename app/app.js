var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var uuid = require('uuid/v4');
var FileStore = require('session-file-store')(session);
var favicon = require('serve-favicon');
var flash = require('connect-flash');

require('dotenv').config();
require('./config/passport')(passport);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    return next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true})); //TODO ? changed to TRUE
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    genid: () => uuid(),
    secret: process.env.SECRET,
    store: new FileStore(),
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
//app.use(passport.session());
app.use(flash());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', require('./routes/user'));
app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));
app.use('/admin', require('./routes/admin'));
app.use('/api', require('./routes/api'));
app.use('/error', function (req, res) {
    res.render('error')
});
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
