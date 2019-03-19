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
    backgroundColor: '#F5FCFF',
    marginBottom: 40
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center'
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50
  }
});
