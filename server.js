var express = require('express');
const hbs = require('hbs')
var app = express();

hbs.registerPartials(__dirname+ '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',()=> {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', function (req, res) {
  res.render('home.hbs',{
    pageTitle: 'home Page',
    welcomeMessage: 'Welcome'
  });
});

app.get('/about', function (req, res) {
  res.render('about.hbs',{
    pageTitle: 'About Page',
  });
})
app.get('/bad', function (req, res) {
  res.send({
    errorMessage: "this is an error message"
  })
})

app.listen(3000, () =>{
    console.log('server started')
})
