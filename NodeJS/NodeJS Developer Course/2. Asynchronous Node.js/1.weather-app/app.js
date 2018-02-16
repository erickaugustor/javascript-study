//const request = require('request');
const yargs = require('yargs');
/********************************************** */
/********************************************** */
const geocode = require('./geocode/geocode.js');
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
        console.log(JSON.stringify(results, undefined, 2));
    }
});
/********************************************** */
/********************************************** */
/********************************************** */
/********************************************** */
/********************************************** */
/********************************************** */
/*...passado....
var encodedAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, responde, body) => {
    if(error){
        console.log('Unable to connect to Google servers.');
    } else if(body.status === 'ZERO_RESULTS'){
        //ERRO DA GOOGLE API
        //TESTAR OS DADOS
        console.log('Unable to find that address.');
    }else if(body.status === 'OK'){
        //console.log(JSON.stringify(body, undefined, 2));
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});
*/