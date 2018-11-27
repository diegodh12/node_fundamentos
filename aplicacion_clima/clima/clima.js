const axios = require('axios');
const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8fc78e9694fa180c9eb846f3493102eb`)
    if (resp.data.cod === "400") {
        throw new Error(`No existe ningún clima para esta lat: ${lat} y lng: ${lng} `);
    } else {
        return {
            temperatura: resp.data.main.temp
        }
    }
}

module.exports = {
    getClima
}