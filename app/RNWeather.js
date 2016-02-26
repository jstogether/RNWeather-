/** @Flow */

var React = require('react-native');

var {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
  TextInput
} = React;

class RNWeather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      weather: null,
      loaded: false,
      error: false
    }
  }
  submitCity(){
    if (this.state.city) {
      this.setState({isLoading: true})

      var appid = '8278ca33b570e8ac2502f311db32c9a5'
      var city = this.state.city.trim();
      var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;

      fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            isLoading: false,
            weather: JSON.stringify(responseData),
          });
        })
        .catch((error) => this.setState({isLoading: false, error: true}))
        .done()
    }
  }
  handleCityInput(event){
    this.setState({
      city: event.nativeEvent.text
    })
  }
  render() {
    return (
       <View style={styles.container}>
        <Text style={styles.headerText}>Enter your city!</Text>
        <TextInput
        style={styles.searchInput}
        placeholder="City"
        value={this.state.city}
        onChange={this.handleCityInput.bind(this)}
        />
        <TouchableHighlight
          onPress={this.submitCity.bind(this)}
          underlayColor = "#A4E786"
          style={styles.button}>
          <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
        <Text>{this.state.weather}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CD964'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    width: 100,
    backgroundColor: '#FF2A68',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
});

module.exports = RNWeather;
