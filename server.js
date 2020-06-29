var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var hbsutils = require('hbs-utils')(hbs);

var pages = require('./routes/pages');

// Init App
var app = express();

// View Engine
app.set('views', './views');
app.set('view engine', 'hbs');

// hbs.registerHelper("inc", function(value, options)
// {
//     return parseInt(value) + 1;
// });

// Register Partials
hbs.registerPartials(__dirname + '/views/partials');
hbsutils.registerWatchedPartials(__dirname + '/views/partials'); // partial changes will restart nodemon

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
// app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static("public"));

app.use('/', pages);

// Set Port
app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
});