import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import firestore from "@react-native-firebase/firestore";
import NaverMapView, { Marker } from 'react-native-nmap';
export const TrashXY = firestore().collection("trash");

var distance = 1e9;
var title = "111";
var globalVariable=0;


function AjouTrashScreen() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [trash_lat,setTrash_lat] = useState(0);
  const [trash_lng,setTrash_lng] = useState(0);

  useEffect(() => {
    requestLocationPermission();
    return () => {
      // Clean up the watchPosition listener when the component is unmounted
      Geolocation.clearWatch(watchId);
    };
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
    let watchId = null;

    if (hasLocationPermission) {
      watchId = Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLatitude(latitude);
          setCurrentLongitude(longitude);
        },
        error => {
          console.error('Failed to get current location:', error);
        },
        { enableHighAccuracy: true, distanceFilter: 5 }
      );
    }

    return () => {
      // Clean up the watchPosition listener when hasLocationPermission changes or the component is unmounted
      if (watchId) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, [hasLocationPermission]);

  const initCoords = { latitude: 37.2822222, longitude: 127.04410553 };
  if(currentLongitude && currentLatitude)
  {
        TrashXY.get().then((res) => {
          res.forEach((doc) => {
            if (distance > ((doc.data().lat - currentLatitude) ** 2 + (doc.data().lng - currentLongitude) ** 2)) {
              title = doc.data().title;
              temp_lat = doc.data().lat;
              temp_lng = doc.data().lng;
              distance = ((doc.data().lat - currentLatitude) ** 2 + (doc.data().lng - currentLongitude) ** 2);
            }
          });
        setTrash_lat(temp_lat);
        setTrash_lng(temp_lng);
        });
  }

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
          <Marker coordinate={{ latitude: trash_lat, longitude: trash_lng }} />
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