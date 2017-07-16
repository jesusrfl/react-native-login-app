import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

import Login from './src/views/login';
import Map from './src/views/map';

export default class prueba extends Component {

  state = {
    isLogged: false
  }

  render() {

    return (this.state.isLogged ?
        <Map onLogoutPress = { () => this.setState({ isLogged: false }) } /> :
        <Login onLoginPress = { () => this.setState({ isLogged: true }) } /> );
  }
}


AppRegistry.registerComponent('prueba', () => prueba);
