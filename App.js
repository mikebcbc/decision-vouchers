/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

export default class App extends Component {

  componentDidMount() {
    // firebase.auth()
    //   .signInAnonymously()
    //   .then(credential => {
    //     console.log(signed);
    //   });
  }

  async googleLogin() {
    try {
      // add any configuration settings here:
      await GoogleSignin.configure({
        webClientId: '266581223678-1kuqe43r734vb5k8ptki25pl8rsj6h0n.apps.googleusercontent.com'
      });

      const data = await GoogleSignin.signIn();

      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
      console.log('here');
      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Decision Voucherss!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.googleLogin} />
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
