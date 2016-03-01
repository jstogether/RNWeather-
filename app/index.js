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
      error: false
    }
  }
  submitCity(city) {
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
  renderLoading() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }
  renderWeather() {
    return (
      <WeatherConditions data={this.state.weather} />
    )
  }
  renderSearch() {
    return (
      <SearchForm onSearch={this.submitCity.bind(this)} />
    )
  }
  render() {
    if (this.state.isLoading)
      return this.renderLoading();

    if (this.state.weather)
      return this.renderWeather();

    return this.renderSearch();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

AppRegistry.registerComponent('RNWeather', () => RNWeather);
