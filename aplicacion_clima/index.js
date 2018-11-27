const { getLugar } = require('./lugar/lugar.js');
const { getClima } = require('./clima/clima.js');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad',
        demand: true
    }
}).argv;

let input = argv.direccion;
let darClima = async(dire) => {
    try {
        let lugar = await getLugar(dire)
        let clim = await getClima(lugar.lat, lugar.lng);
        return `el clima en ${lugar.lugar} es de ${clim.temperatura} C`
    } catch (e) {
        return `No se pudo encontrar una temperatura para ${dire}`
    }
}
darClima(input).then((resp) => {
    console.log(resp);
}).catch((e) => {
    console.log(e);
})