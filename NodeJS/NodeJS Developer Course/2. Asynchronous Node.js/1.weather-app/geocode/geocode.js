/********************************************** */
const request = require('request');
/********************************************** */
var geocodeAddress = (address, callback) => {
    /********************************************** */
    /********************************************** */
    var encodedAddress = encodeURIComponent(address);
    /********************************************** */
    /********************************************** */
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, responde, body) => {
        if(error){
            callback('Unable to connect to Google servers.');
            //console.log('Unable to connect to Google servers.');
        } else if(body.status === 'ZERO_RESULTS'){
            //ERRO DA GOOGLE API
            //TESTAR OS DADOS
            callback('Unable to find that address.');
            //console.log('Unable to find that address.');
        } else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
            //console.log(JSON.stringify(body, undefined, 2));
            //console.log(`Address: ${body.results[0].formatted_address}`);
            //console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            //console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
    });
    /********************************************** */
    /********************************************** */
}
/********************************************** */
/********************************************** */
/********************************************** */
module.exports.geocodeAddress = geocodeAddress;