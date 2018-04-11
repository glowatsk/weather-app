const request = require('request');
const key = require('../api');

API_KEY = key.API_KEY_DARK_SKIES

var getWeather = (longitude, latitude, callback) => {
    request({
        url: `https://api.forecast.io/forecast/${API_KEY}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports = {
    getWeather
}