import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class DecisionCount extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.decision}>
          <Text style={styles.heading}>Sof</Text>
          <View style={styles.addsubtract}>
            <Text style={styles.counters}>-</Text>
            <Text style={styles.number}>25</Text>
            <Text style={styles.counters}>+</Text>
          </View>
        </View>
        <View style={styles.decision}>
          <Text style={styles.heading}>Mike</Text>
          <View style={styles.addsubtract}>
            <Text style={styles.counters}>-</Text>
            <Text style={styles.number}>5</Text>
            <Text style={styles.counters}>+</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.33,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  decision: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    margin: 10,
    // Figure out iOS below
    //
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 0
    // },
    // shadowRadius: 28,
    elevation: 8
  },
  heading: {
    fontSize: 20,
    textAlign: 'center'
  },
  number: {
    fontSize: 40,
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
  addsubtract: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counters: {
    fontSize: 30
  }
});
