//const request = require('request');
const yargs = require('yargs');
/********************************************** */
/********************************************** */
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
/********************************************** */
/********************************************** */
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

//Format Input
/********************************************** */
/********************************************** */
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
                //console.log(JSON.stringify(weatherResults, undefined, 2));
            }
        });
        //console.log(JSON.stringify(results, undefined, 2));
    }
});
/********************************************** */
/********************************************** */
/********************************************** */
/********************************************** */


//Wheather

//API: e73bd52c2abe818763478e2bf908c58b
//https://api.darksky.net/forecast/e73bd52c2abe818763478e2bf908c58b/[latitude],[longitude]
//https://api.darksky.net/forecast/e73bd52c2abe818763478e2bf908c58b/-22.8641069,-47.0216352
