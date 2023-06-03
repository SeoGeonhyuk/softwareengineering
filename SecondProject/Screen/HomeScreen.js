import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to 3D Map"
          onPress={() => navigation.navigate('Ajou3D')}

        />
        <Button
          title="Go to Trash Search"
          onPress={() => navigation.navigate('AjouTrashSearch')}
        />
         <Button
                  title="Go to Tmap"
                  onPress={() => navigation.navigate('Tmap')}
                />
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


export default HomeScreen;