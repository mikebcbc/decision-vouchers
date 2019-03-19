import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';

export default class LoggedOutView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Decision Vouchers!</Text>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.props.login} />
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
  }
});
