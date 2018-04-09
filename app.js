const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=',
    JSON: true

}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});