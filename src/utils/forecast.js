const request = require('request');

const forecast = (lat, lon, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=e348ddea6bde51d35385d77d375ca27b&query=' + lat +',' + lon;
    
    request({url, json: true}, (error, { body }) =>{                   // request({url: url, json: true}, (error, response) =>{  ....response.body
        if(error){
            callback('Unable to connect to weather services!', undefined);
        } else if(body.error){
            callback('Unable to find location.', undefined)
        } else{
            callback(undefined, `${body.current.weather_descriptions[0]}. <br>Its currently ${body.current.temperature} degrees outside. <br>Humidity Percentage is ${body.current.humidity}. <br>Wind speed is ${body.current.wind_speed} kilometers/hour`);
        }
    })
}


module.exports = forecast






