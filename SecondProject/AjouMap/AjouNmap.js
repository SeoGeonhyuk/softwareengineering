import React, { useState, useEffect,  } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import NaverMapView, { Marker } from 'react-native-nmap';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';

import UserLocation from './UserLocation';
import TrashLocation from './TrashLocation';
import ClosestTrash from './ClosestTrash';
import Arrow from './Arrow';
import Compass from './Compass';

const AjouNmap = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userLocation, closestTrash } = route.params;

  return (
    <View style={styles.container}>
      <Text> {userLocation} </Text>

      {userLocation && userLocation.length === 2 && (
        <View style={styles.mapContainer}>
          <NaverMapView style={styles.map} center={{ latitude: userLocation[0], longitude: userLocation[1] }} zoom={13}>
            {userLocation && userLocation.length === 2 && (
              <Marker
                coordinate={{ latitude: userLocation[0], longitude: userLocation[1] }}
                image= {require('./Marker/User.png')}
                width = {50}
                height = {50}
              />
            )}
            {closestTrash && (
              <Marker
                coordinate={{ latitude: closestTrash.lat, longitude: closestTrash.lng }}
                image = {require('./Marker/Trash.png')}
                width = {30}
                height = {30}
              />
            )}
          </NaverMapView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default AjouNmap;