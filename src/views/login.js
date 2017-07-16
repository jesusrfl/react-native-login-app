import React, { Component } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View

} from 'react-native';

export default class Login extends Component {

  state = {
    username: '',
    password: '',
    isLoggingIn: false,
    message: ''
  }

  logUser = () => {
    this.setState({ isLoggingIn: true, message: '' });
    if (this.state.username == 'admin' && this.state.password == 'admin') {
      this.props.onLoginPress();
    } else {
      this.setState({ isLoggingIn: false });
      this.setState({ message: 'Datos incorrectos!.' });
    }

  }

  clearUsername = () => {
    this._username.setNativeProps({ text: '' });
    this.setState({ message: '' });
  }

  clearPassword = () => {
    this._password.setNativeProps({ text: '' });
    this.setState({ message: '' });
  }

  render() {
    return (
      <ScrollView style={ styles.scroll }>
        <Text
          style={ styles.text }>
            Inicio de sesión
        </Text>

        <TextInput
          style={ styles.username }
          ref={ component => this._username = component }
          onChangeText={ (username) => this.setState({ username }) }
          autoFocus={ true }
          onFocus={ this.clearUsername }
          placeholder='Usuario'
        />

        <TextInput
          style={ styles.password }
          ref={ component => this._password = component }
          onChangeText={ (password) => this.setState({ password }) }
          secureTextEntry={ true }
          onFocus={ this.clearPassword }
          onSubmitEditing={ this.logUser }
          placeholder='Contraseña'
        />

        {!!this.state.message && (
           <Text style={ styles.message } >
             { this.state.message }
           </Text>
        )}

        { this.state.isLoggingIn && <ActivityIndicator />}

        <View style={ styles.view } />

        <Button
          disabled={ this.state.isLoggingIn || !this.state.username || !this.state.password }
          onPress={ this.logUser }
          title="Iniciar sesión"
        />
        </ScrollView>
      )
  }
}


const styles = StyleSheet.create({
  scroll: {
    padding: 20,
  },
  text: {
    fontSize: 27
  },
  username: {
    marginTop: 50
  },
  password: {
    marginTop: 10
  },
  view: {
    margin: 7
  },
  message: {
    fontSize: 14,
    color: 'red',
    padding: 5
  },

});
