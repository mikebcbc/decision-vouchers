import React, { Component } from 'react';
import { TouchableHighlight, Image, Text, View, StyleSheet } from 'react-native';

export default class LoginHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome, {this.props.name}</Text>
        <Image style={styles.profile} source={{uri: this.props.profileImage}} />
        {/* {this.state.user &&
          <Button title="Logout" onPress={this.logout} />
        } */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 15,
    marginBottom: 'auto',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 50
  }
});
