/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var Main = require('./app/Main');

var {
  AppRegistry,
  Component,
  View,
  Text,
  Navigator,
  StyleSheet
} = React;

class RNWeather extends Component {
  render() {
     return (
       <View style={styles.container}>
        <Main
          city = "NYC"/>
       </View>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
});

AppRegistry.registerComponent('RNWeather', () => RNWeather);
