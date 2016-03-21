/** @Flow */

var React = require('react-native');

var I18n = require('react-native-i18n');
I18n.fallbacks = true;

var {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
  TextInput,
} = React;

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
    }
  }
  handleCityInput(event){
    this.setState({
      city: event.nativeEvent.text
    })
  }
  handleSearch(event){
    this.props.onSearch(this.state.city)
  }
  render() {
    return (
       <View style={styles.container}>
        <Text style={styles.headerText}>Enter your city!</Text>
        <TextInput
        style={styles.searchInput}
        placeholder={I18n.t('city')}
        value={this.state.city}
        onChange={this.handleCityInput.bind(this)}
        />
        <TouchableHighlight
          onPress={this.handleSearch.bind(this)}
          underlayColor = "#A4E786"
          style={styles.button}>
          <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

I18n.translations = {
  en: {
    city: 'City'
  },
  es: {
    city: 'Ciudad'
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

module.exports = SearchForm;
