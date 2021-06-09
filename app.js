
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

//TO DO: Requerimos de (hbs);
app.set('view engine', 'hbs');

//TO DO: Parciales
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico 
app.use( express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'MGV',
        titulo: 'blog'
    })
  });


app.get('/generic', function (req, res) {
    res.render('generic')
  });

app.get('/elements', function (req, res) {
    res.render('elements')
  });

 
app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});