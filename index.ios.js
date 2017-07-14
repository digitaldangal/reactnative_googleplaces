/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RNGooglePlaces from 'react-native-google-places';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TouchableOpacity
} from 'react-native';

export default class googlemap extends Component {

  constructor(props,context){
    super(props,context);
    this.state={
        place:{}
    }
  }

  openSearchModal=()=> {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {

    this.setState(place);
      //console.log(place);

		// place represents user's selection from the
		// suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  render() {

      console.log(this.state);
      let address=this.state.address;


    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.openSearchModal()}
        >
          <Text style={{padding:20}}>Pick a Place</Text>

          <Text style={{padding :20,marginTop:10}}>Selected address : {address}</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('googlemap', () => googlemap);
