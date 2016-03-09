/** @Flow */

'use strict';

var React = require('react-native');

var I18n = require('react-native-i18n');
var WeatherAPI = require('./services/weather-api');

var SearchForm = require('./search-form');
var WeatherConditions = require('./weather-conditions');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} = React;

class RNWeather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      weather: null,
      isLoading: false,
      error: false,
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let {latitude, longitude} = position.coords;
        this._submitCoordinates(latitude, longitude);
      },
      (error) => console.log(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
  _submitCity(city) {
    if (city) {
      this.setState( {isLoading: true} )
      WeatherAPI.getWeatherByCity(city.trim())
        .then((responseData) => {
          this.setState({
            isLoading: false,
            weather: responseData,
          });
        })
        .catch((error) => this.setState({isLoading: false, error: true}))
        .done()
    }
  }
  _submitCoordinates(lat, lon) {
    if (lat && lon) {
      this.setState( {isLoading: true} )
      WeatherAPI.getWeatherByCoordinates(lat, lon)
        .then((responseData) => {
          this.setState({
            isLoading: false,
            weather: responseData,
          });
        })
        .catch((error) => this.setState({isLoading: false, error: true}))
        .done()
    }
  }
  _renderLoading() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }
  _renderWeather() {
    return (
      <WeatherConditions data={this.state.weather} />
    )
  }
  _renderSearch() {
    return (
      <SearchForm onSearch={this._submitCity.bind(this)} />
    )
  }
  render() {
    if (this.state.isLoading)
      return this._renderLoading();

    if (this.state.weather)
      return this._renderWeather();

    return this._renderSearch();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

AppRegistry.registerComponent('RNWeather', () => RNWeather);
