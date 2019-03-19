import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import LoginHeader from '../LoginHeader/LoginHeader';

export default class LoggedInView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <LoginHeader name={this.props.user.displayName} profileImage={this.props.user.photoURL} />
        <Button onPress={this.props.logout} title="LOGOUT" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
