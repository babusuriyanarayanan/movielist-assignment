var express = require('express');
var engines = require('consolidate');
var app = express();
var mustache = require('mustache');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function (req, res) {
   res.render('index.html');
});

app.get('*', function (req, res) {
   res.render('index.html');
});



var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port)
});