const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const uuid = require('uuid/v4');
const FileStore = require('session-file-store')(session);
const favicon = require('serve-favicon');
const flash = require('connect-flash');
const vhost = require('vhost');

require('dotenv').config();
require('./config/passport')(passport);

const app = express();
const userClient = express();
const adminClient = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    return next();
});
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    genid: () => uuid(),
    secret: process.env.SECRET,
    store: new FileStore(),
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(flash());

// Routes area
app.use('/signup', require('./routes/signup'));
app.use('/api', require('./routes/api'));
app.use('/signin', require('./routes/login'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/error', function (req, res) {
    res.render('error')
});

// Multiple apps serving
userClient.use(express.static(path.join(__dirname, 'client', 'user', 'build')));
adminClient.use(express.static(path.join(__dirname, 'client', 'admin', 'build')));
userClient.use((req, res) => res.sendFile(path.join(__dirname, 'client', 'user', 'build', 'index.html')));
adminClient.use((req, res) => res.sendFile(path.join(__dirname, 'client', 'admin', 'build', 'index.html')));
app.use(vhost('localhost', userClient));
app.use(vhost('admin.localhost', adminClient));

// app.use(express.static(path.join(__dirname, 'client', 'user', 'build')));
// app.use('/', require('./routes/user'));
// app.use(express.static(path.join(__dirname, 'admin', 'user', 'build')));
// app.use('/admin', require('./routes/admin'));

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
