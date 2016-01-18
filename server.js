var express = require('express'),
    passport = require('passport'), 
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require("cookie-parser"),
    db = require('mongoose');

/**
 * Start database connection
 * Default values (please change by yours):
 *  Server: localhost
 *  Database: db
 */
db.connect('mongodb://localhost/db');

/**
 * Declare all local variables
 * 
 */
var app = express();
var port = process.env.port || 1337;

/**
 * Configure ejs templates for easily HTML implementation
 * 
 */
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

/**
 * 
 */
app.use(express.static('public'));
app.use(session({ secret: 'sessionId', saveUninitialized: true, resave: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize());
app.use(passport.session());

/* 
 * You can initialize controllers here
 * 
 */
var login = require('./controllers/login.js')(app, db);
var index = require('./controllers/index.js')(app, db);
app.route('/', index);
app.route('/login', login);

app.listen(port, function () {
    console.log('Boilerplate app listening on port ' + port + '!');
});