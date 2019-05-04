import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import firebase from 'react-native-firebase';

export default class ActiveBets extends Component {

  constructor(props) {
    super(props);
    this.betsRef = firebase.firestore().collection('bets');
    this.unsubscribe = null;

    this.onCollectionUpdate = this.onCollectionUpdate.bind(this);

    this.state = {
      bets: [1, 2, 3, 4, 5]
    };
  }

  componentDidMount() {
    this.unsubscribe = this.betsRef.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate(querySnapshot) {
    let bets = {};
    querySnapshot.forEach((doc) => {
      const { count } = doc.data();
      const key = doc.id;

      bets.push({
        key: doc.id,
        doc,
        count
      });
    });

    this.setState({ bets });
  }

  // addDecision(user) {
  //   const reffedDoc = this.voucherRef.doc(user);
  //   reffedDoc.get()
  //     .then((snapshot) => {
  //       let count = snapshot.data() ? snapshot.data().count : null;
  //       if (count) {
  //         reffedDoc.update({count: count + 1});
  //       } else {
  //         reffedDoc.set({count: 1});
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.bets}
          horizontal={true}
          renderItem={({item}) => <Text style={styles.card}>{item}</Text>}
        />
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
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 50,
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
  }
});
