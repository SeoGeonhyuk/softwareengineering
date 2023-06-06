/* import React, { Component } from 'react';
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


export default HomeScreen;  */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import styles from './styles.js'

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (

      <View style={styles.home_container}>
      <View style={styles.titleContainer}>
                      <Text style={styles.title}>AJOU LAND</Text>
                      <Text style={styles.description}>건물3D지도 및 휴지통 위치 제공앱</Text>
      </View>
        <View style={styles.logoContainer}>
          <Image source={require('./logo.png')} style={styles.logo} />
        </View>


        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ajou3D')}>
          <Text style={styles.buttonText}>View 3D Map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AjouTrashSearch')}>
          <Text style={styles.buttonText}>Trash bin Search</Text>
        </TouchableOpacity>



      </View>
    );
  }
}


export default HomeScreen;