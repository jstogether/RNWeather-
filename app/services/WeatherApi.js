var WeatherAPI = {
  //By name : api.openweathermap.org/data/2.5/weather?q=London
  getWeatherByCity(city){
  var city = city.trim();
  var url = `api.openweathermap.org/data/2.5/weather?q=${city}`
  return fetch(url)
    .then((res) => res.json());
  }
  //By zipcode : api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}
  //TBD
}

module.exports = WeatherAPI;
