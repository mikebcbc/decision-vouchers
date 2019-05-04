import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import FlipCard from 'react-native-flip-card';
import Carousel from 'react-native-snap-carousel';
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
    // this.unsubscribe = this.betsRef.onSnapshot(this.onCollectionUpdate);
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
        <Carousel
          ref={(c) => {this._carousel = c;}}
          data={this.state.bets}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width / 1.5}
          renderItem={({ item }) => (
            <FlipCard style={styles.cardContainer}>
              <View style={[styles.card, styles.frontCard]}>
                <Text>{item}</Text>
              </View>
              <View style={[styles.card, styles.backCard]}>
                <Text>Back</Text>
              </View>
            </FlipCard>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.66,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginRight: 5,
    marginBottom: 20,
    marginLeft: 5,
    elevation: 8,
    // Figure out iOS below
    //
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 0
    // },
    // shadowRadius: 28
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  frontCard: {

  },
  backCard: {

  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent'
  }
});
