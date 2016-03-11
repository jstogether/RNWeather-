var I18n = require('react-native-i18n'); // FIXME: This file should not contain any trace of RN code

var WeatherApi = {
  // http://openweathermap.org/current
  // By city name
  getWeatherByCity(city){
    var appid = '8278ca33b570e8ac2502f311db32c9a5'
    var lang = I18n.locale.split('-')[0]
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${appid}`
    return fetch(url).then((res) => res.json())
  },
  // By geographic coordinates
  getWeatherByCoordinates(lat, lon){
    var appid = '8278ca33b570e8ac2502f311db32c9a5'
    var lang = I18n.locale.split('-')[0]
    var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&appid=${appid}`
    return fetch(url).then((res) => res.json())
  }
}

module.exports = WeatherApi;
