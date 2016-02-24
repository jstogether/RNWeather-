'use strict';

var React = require('react-native');
var RNWeather = require('./app/RNWeather');

var {
  AppRegistry,
} = React;

AppRegistry.registerComponent('RNWeather', () => RNWeather);
