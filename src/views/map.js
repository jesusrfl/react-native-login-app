import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {


  render() {
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          initialRegion={{
            latitude: 6.6367745,
            longitude: -71.1147458,
            latitudeDelta: 5,
            longitudeDelta: 5,
          }}
        />

        <Button
          onPress={ this.props.onLogoutPress }
          title="Cerrar sesión"
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
   ...StyleSheet.absoluteFillObject,
  },
});
