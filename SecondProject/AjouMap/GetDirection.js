import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import NaverMapView, { Marker } from 'react-native-nmap';
import Compass from './Compass';
import UserLocation from './UserLocation';
import TrashLocation from './TrashLocation';
import ClosestTrash from './ClosestTrash';
import Arrow from './Arrow';

const GetDirection = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [userDirection, setUserDirection] = useState(null);
  const [trashLocationList, setTrashLocationList] = useState([]);
  const [closestTrash, setClosestTrash] = useState(null);
  const [closestTrashDirection, setClosestTrashDirection] = useState(null);
  const [arrowAngle, setArrowAngle] = useState(0);

  const initCoords = { latitude: 37.2822222, longitude: 127.04410553 };

  return (
    <View style={styles.container}>
      <UserLocation setUserLocation={setUserLocation} />
      <TrashLocation setTrashLocationList={setTrashLocationList} />
      <ClosestTrash
        userLocation={userLocation}
        trashLocationList={trashLocationList}
        setClosestTrash={setClosestTrash}
        setClosestTrashDirection={setClosestTrashDirection}
      />
      <Compass
        setUserDirection={setUserDirection}
      />
      <Arrow
        userDirection={userDirection}
        closestTrashDirection={closestTrashDirection}
        setArrowAngle={setArrowAngle}
      />

      <Text>{userDirection} {closestTrashDirection} {arrowAngle}</Text>

      <View style={styles.mapContainer}>
        <NaverMapView style={styles.map} center={initCoords} zoom={13}>
          {userLocation && userLocation.length === 2 && (
            <Marker
              coordinate={{ latitude: userLocation[0], longitude: userLocation[1] }}
            />
          )}
          {closestTrash && (
            <Marker
              coordinate={{ latitude: closestTrash.lat, longitude: closestTrash.lng }}
            />
          )}
        </NaverMapView>
        <View style={styles.arrowContainer}>
          <Image
            source={require('./pngwing.com.png')}
            style={[
              styles.arrowImage,
              { transform: [{ rotate: `${arrowAngle}deg` }] },
            ]}
          />
        </View>
      </View>
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
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    marginTop: -25,
    marginLeft: -25,
  },
  arrowImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default GetDirection;