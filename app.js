const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const getWeather = require('./darkskies/darkskies');

const argv = yargs
  .options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(`Fetching weather for latitude: ${results.latitude} longitutde: ${results.longitude}`)
    getWeather.getWeather(results.longitude, results.latitude, (errorMessage, weatherResults) => {
      console.log(`It is currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
    });
  }
});
