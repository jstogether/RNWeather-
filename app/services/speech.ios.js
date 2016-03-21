'use strict';

var React = require('react-native');

var { Platform } = React;

var ios = require('react-native-speech');

var Speech = {
  say(message) {
    ios.speak({text: message});
  }
}

module.exports = Speech;
