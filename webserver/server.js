const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000
hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

hbs.registerHelper('getanio',()=>{
    return new Date().getFullYear();
});
app.get('/', function(req, res) {
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    }
    res.render('home', {
        nombre: 'Diego Díaz Hernandez'

    });
});
app.get('/about', function(req, res) {
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    }
    res.render('about', {
        nombre: 'Diego Díaz Hernandez'
    });
});
app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});