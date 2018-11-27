const axios = require('axios');

const getLugar = async(direccion) => {
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    } else {
        return {
            lugar: resp.data.results[0].formatted_address,
            lng: resp.data.results[0].geometry.location.lng,
            lat: resp.data.results[0].geometry.location.lat
        }
    }
}
module.exports = {
    getLugar
}