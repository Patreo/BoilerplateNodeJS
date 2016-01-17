var express = require('express');
var bodyParser = require('body-parser');
var db = require('mongoose');

/**
 * Start database connection
 * Default values (please change by yours):
 *    Server: localhost
 *    Database: db
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

/* 
 * You can initialize controllers here
 * 
 */
var index = require('./controllers/index.js')(app, db);
app.route('/', index);

app.listen(port, function () {
    console.log('Boilerplate app listening on port ' + port + '!');
});