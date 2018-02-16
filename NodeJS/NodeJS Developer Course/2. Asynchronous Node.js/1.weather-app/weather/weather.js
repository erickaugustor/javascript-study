const request = require('request');



var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e73bd52c2abe818763478e2bf908c58b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        // if(error){
        //     console.log('Ubable to connect to Darksky/Forecast.io server');
        // }else if(response.statusCode === 400){
        //     console.log('Unable to fetch weather.');
        // }else if(responde.statusCode === 200){
        //     console.log(body.currently.temperature);
        // }

        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
            //console.log(body.currently.temperature);
        }else{
            //console.log('Unable to fetch weather.');
            callback('Unable to fetch weather.');
        }

        //if(!error && response.statusCode === 200)

    });
};

module.exports.getWeather = getWeather;

