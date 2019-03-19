import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import LoginHeader from '../LoginHeader/LoginHeader';
import DecisionCount from '../DecisionCount/DecisionCount';

export default class LoggedInView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <LoginHeader name={this.props.user.displayName} profileImage={this.props.user.photoURL} />
        <Text style={styles.sectionTitle}>Decision Voucher Distribution</Text>
        <DecisionCount />
        <Text style={styles.sectionTitle}>Active Bets</Text>
        <DecisionCount />
        <Button onPress={this.props.logout} title="LOGOUT" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  sectionTitle: {
    textAlign: 'center'
  }
});
