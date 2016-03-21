'use strict';

var mock = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"cmc stations","main":{"temp":275.349,"pressure":1027.05,"humidity":85,"temp_min":275.349,"temp_max":275.349,"sea_level":1037.32,"grnd_level":1027.05},"wind":{"speed":4.01,"deg":204.001},"rain":{"3h":0.135},"clouds":{"all":92},"dt":1456788793,"sys":{"message":0.0066,"country":"GB","sunrise":1456728296,"sunset":1456767688},"id":2643743,"name":"London","cod":200}'

var WeatherApi = {
  getWeather(){
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(mock))
    })
  }
}

module.exports = WeatherApi;
