import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';

export default class DecisionCount extends Component {

  constructor(props) {
    super(props);
    this.addDecision = this.addDecision.bind(this);
  }

  addDecision() {
    this.props.voucherRef.get()
      .then((snapshot) => {
        console.log(snapshot.exists);
        if (snapshot.exists) {
          this.props.voucherRef.update({count: 3});
        } else {
          this.props.voucherRef.set({count: 1});
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // firebase.firestore().runTransaction().then(result => console.log(result)).catch(e => console.log(e));
      // .runTransaction(transaction => {
      //   console.log('here');
      //   const doc = transaction.get(this.props.voucherRef);
      //   if (!doc.exists) {
      //     transaction.set(this.props.voucherRef, { count: 1 });
      //     return 1;
      //   }

      //   const newCount = doc.data().count + 1;

      //   transaction.update(this.props.voucherRef, {
      //     count: newCount
      //   });

      //   return newCount;
      // })
      // .then(newCount => {
      //   console.log(`new count is ${newCount}`);
      // })
      // .catch(e => {
      //   console.log(`transaction failure: ${e}`);
      // });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.decision}>
          <Text style={styles.heading}>Sof</Text>
          <View style={styles.addsubtract}>
            <Text style={styles.counters}>-</Text>
            <Text style={styles.number}>25</Text>
            <TouchableNativeFeedback onPress={this.addDecision}>
              <Text style={styles.counters}>+</Text>
            </TouchableNativeFeedback>
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
