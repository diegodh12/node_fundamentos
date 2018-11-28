const express = require('express');
const app = express();
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.get('/', function(req, res) {
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    }
    res.render('home', {
        nombre: 'Diego Díaz Hernandez',
        anio: new Date().getFullYear()

    });
});
app.get('/about', function(req, res) {
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    }
    res.render('about', {
        nombre: 'Diego Díaz Hernandez',
        anio: new Date().getFullYear()

    });
});
app.listen(3000, () => {
    console.log('escuchando en el puerto 3000');
});