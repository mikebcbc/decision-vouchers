import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import firebase from 'react-native-firebase';

import LoginHeader from '../LoginHeader/LoginHeader';
import DecisionCount from '../DecisionCount/DecisionCount';

export default class LoggedInView extends Component {

  constructor(props) {
    super(props);
    this.voucherRef = firebase.firestore().collection('vouchers').doc(props.user.displayName);
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginHeader name={this.props.user.displayName} profileImage={this.props.user.photoURL} />
        <Text style={styles.sectionTitle}>Decision Voucher Distribution</Text>
        <DecisionCount voucherRef={this.voucherRef} />
        <Text style={styles.sectionTitle}>Active Bets</Text>
        <DecisionCount decisionsRef={this.props.decisionsRef} />
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
