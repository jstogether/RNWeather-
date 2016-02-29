var WeatherApi = {
  //By name : api.openweathermap.org/data/2.5/weather?q=London
  getWeatherByCity(city){
    var appid = '8278ca33b570e8ac2502f311db32c9a5'
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    return fetch(url).then((res) => res.json())
  }
  //By zipcode : api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}
  //TBD
}

module.exports = WeatherApi;
