import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

import LoggedOutView from '../LoggedOutView/LoggedOutView';
import LoggedInView from '../LoggedInView/LoggedInView';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      user: null
    }
    this.decisions = firebase.firestore().collection('decisions');
  }

  /**
   * Listen for any auth state changes and update component state
   */
  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  async login() {
    try {
      await GoogleSignin.configure();

      const data = await GoogleSignin.signIn();

      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);

      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

    } catch (e) {
      console.error(e);
    }
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    console.log('user', this.state.user);
    return (
      <View style={styles.container}>
        { !this.state.user &&
          <LoggedOutView login={this.login} />
        }
        { this.state.user &&
          <LoggedInView
            user={this.state.user._user}
            logout={this.logout}
            decisions={this.decisions}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
