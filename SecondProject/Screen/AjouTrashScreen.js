import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Permission from '../AjouMap/Permission';



class AjouTrashScreen extends Component {

  render() {
    const navigation  = this.props.navigation;
    return (
      <View style={styles.container}>
        <Permission navigation={navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AjouTrashScreen;