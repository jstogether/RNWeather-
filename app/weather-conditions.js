/** @Flow */

'use strict';

var React = require('react-native');

var {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Image
} = React;

class WeatherConditions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.data)
      return (
        <View style={styles.container}>
          <Text>{this.props.data.name}</Text>
          <Image
            source={{uri: 'http://openweathermap.org/img/w/' + this.props.data.weather[0].icon + '.png'}}
            style={styles.icon}
          />
          <Text>{this.props.data.weather[0].description}</Text>
        </View>
      )
    else
      return <Text>No Data</Text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  icon: {
    width: 50,
    height: 50,
  },
})

module.exports = WeatherConditions;
