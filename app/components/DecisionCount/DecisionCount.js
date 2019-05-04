import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import firebase from 'react-native-firebase';

export default class DecisionCount extends Component {

  constructor(props) {
    super(props);
    this.voucherRef = firebase.firestore().collection('vouchers');
    this.unsubscribe = null;

    this.onCollectionUpdate = this.onCollectionUpdate.bind(this);

    this.state = {
      vouchers: {}
    };
  }

  componentDidMount() {
    this.unsubscribe = this.voucherRef.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate(querySnapshot) {
    let vouchers = {};
    querySnapshot.forEach((doc) => {
      const { count } = doc.data();
      const key = doc.id;

      vouchers = Object.assign(vouchers, {
        [key]: count
      });
    });

    this.setState({ vouchers });
  }

  addDecision(user) {
    const reffedDoc = this.voucherRef.doc(user);
    reffedDoc.get()
      .then((snapshot) => {
        let count = snapshot.data() ? snapshot.data().count : null;
        if (count) {
          reffedDoc.update({count: count + 1});
        } else {
          reffedDoc.set({count: 1});
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    console.log(this.state.vouchers);
    return (
      <View style={styles.container}>
        <View style={styles.decision}>
          <Text style={styles.heading}>Sof</Text>
          <View style={styles.addsubtract}>
            <Text style={styles.counters}>-</Text>
            <Text style={styles.number}>{this.state.vouchers['Sofie']}</Text>
            <TouchableNativeFeedback onPress={() => this.addDecision('Sofie')}>
              <Text style={styles.counters}>+</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={styles.decision}>
          <Text style={styles.heading}>Mike</Text>
          <View style={styles.addsubtract}>
            <Text style={styles.counters}>-</Text>
            <Text style={styles.number}>{this.state.vouchers['Mike']}</Text>
            <Text style={styles.counters} onPress={() => this.addDecision('Mike')}>+</Text>
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
