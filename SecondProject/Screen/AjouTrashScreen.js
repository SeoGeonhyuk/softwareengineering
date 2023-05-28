import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import NaverMapView, { Marker } from 'react-native-nmap';

function AjouTrashScreen() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasLocationPermission(true);
      }
    } else {
      setHasLocationPermission(true);
    }
  };

  useEffect(() => {
    if (hasLocationPermission) {
      getCurrentLocation();
    }
  }, [hasLocationPermission]);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
      },
      error => {
        console.error('Failed to get current location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const initCoords = { latitude: 37.2822222, longitude: 127.04410553 };

  return (
    <View style={styles.container}>
      <Text>
        {currentLatitude} {currentLongitude}
      </Text>
      {hasLocationPermission ? (
        <NaverMapView style={styles.map} center={initCoords} zoom={13}>
          {currentLatitude && currentLongitude && (
            <Marker coordinate={{ latitude: currentLatitude, longitude: currentLongitude }} />
          )}
        </NaverMapView>
      ) : (
        <Text>Please grant location permission to show the map.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});

export default AjouTrashScreen;