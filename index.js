var express = require('express');
var app     = express();

var handlebars = require('express-handlebars').create({

  defaultLayout: 'main',

  helpers: {
    section: function(name, options) {

      if(!this._sections) this._sections = {};

      this._sections[name] = options.fn(this);

      return null;
    }
  }
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';

  next();
});

app.use(express.static(__dirname + '/public'));

app.get('/',                   function(req, res) { res.render('home'); } );
app.get('/contact',            function(req, res) { res.render('contact'); } );
app.get('/registration',       function(req, res) { res.render('registration'); } );
app.get('/tours/hood-river',   function(req, res) { res.render('tours/hood-river'); } );
app.get('/tours/prices-tours', function(req, res) { res.render('tours/prices-tours'); } );

app.use(function(req, res) {
  res.status(404);
  res.render('404');
});
 
app.use(function(req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.send('500');
});

app.listen(app.get('port'), function() {
  console.log('Express запущен на http://localhost:' + app.get('port'));
});
