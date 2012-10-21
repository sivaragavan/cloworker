/**
 * Module dependencies.
 */

var express = require('express'),
  http = require('http'),
  path = require('path');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Express'
  });
});

var executor = require('./executor');
app.get('/command/:command', function(req, res) {
  executor.execute(req.params.command, req.query, function(response) {
    res.send(response);
  });
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Cloworker server listening on port " + app.get('port'));
});