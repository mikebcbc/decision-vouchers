/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      user: null
    }
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user: user });
    });
  }

  async googleLogin() {
    try {
      await GoogleSignin.configure();

      const data = await GoogleSignin.signIn();

      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)

      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

    } catch (e) {
      console.error(e);
    }
  }

  logout() {
    console.log('logout');
    firebase.auth().signOut();
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Decision Voucherss!</Text>
        { this.state.user &&
          <Button title="Logout" onPress={this.logout} />
        }
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
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
  }
});
