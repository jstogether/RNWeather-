'use strict';

var React = require('react-native');

var { Platform } = React;
  
var tts = require('react-native-android-speech')

var Speech = {
  say(message) {
    tts.speak(
      {text: message}
    ).then(isSpeaking=>{
      console.log(isSpeaking);
    }).catch(error=>{
      console.log(error)
    });
  }
}

module.exports = Speech;
