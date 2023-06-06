import React, { Component } from 'react';
import { View, Text, Button, PermissionsAndroid, Alert, BackHandle, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetDirection from './GetDirection';
import styles from './styles.js'


class Permission extends Component {

  state = {
      permission: false,
  }

  componentDidMount() {
    this.checkLocationPermission();
  }

  checkLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted) {
        this.props.navigation.navigate('GetDirection');
      } else {
        this.requestLocationPermission();
      }
    } catch (error) {
      console.error('Failed to check location permission:', error);
    }
  };

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission Granted');
        this.props.navigation.navigate('AjouNMap');
      } else {
        Alert.alert('Permission Denied');
        BackHandler.exitApp();
      }
    } catch (error) {
      console.error('Failed to request location permission:', error);
    }
  };

  denyPermission = () => {
    Alert.alert('Permission Denied');
    BackHandler.exitApp();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Location Permission</Text>


        <TouchableOpacity style={styles.button} onPress={this.requestLocationPermission}>
                  <Text style={styles.buttonText}>Request Permission</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.denyPermission}>
                  <Text style={styles.buttonText}>Deny Permission</Text>
        </TouchableOpacity>

        {this.props.children}
      </View>
    );
  }
}

export default Permission;