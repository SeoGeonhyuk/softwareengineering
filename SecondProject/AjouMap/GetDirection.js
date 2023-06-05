import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserLocation from './UserLocation';
import TrashLocation from './TrashLocation';
import ClosestTrash from './ClosestTrash';
import Arrow from './Arrow';
import Compass from './Compass';


const GetDirection = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [userDirection, setUserDirection] = useState(null);
  const [trashLocationList, setTrashLocationList] = useState([]);
  const [closestTrash, setClosestTrash] = useState(null);
  const [closestTrashDirection, setClosestTrashDirection] = useState(null);
  const [closestTrashDistance, setClosestTrashDistance] = useState(null);
  const [arrowAngle, setArrowAngle] = useState(0);

  const navigation = useNavigation();

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
        setClosestTrashDistance = {setClosestTrashDistance}
      />
      <Compass
        UserLocation = {userLocation}
        setUserDirection = {setUserDirection}
      />

      <Arrow
        userDirection={userDirection}
        closestTrashDirection={closestTrashDirection}
        setArrowAngle={setArrowAngle}
      />
      <View style={styles.arrowContainer}>
        <Image
          source={require('./Marker/Arrow.png')}
          style={[
            styles.arrowImage,
            { transform: [{ rotate: `${arrowAngle}deg` }] },
          ]}
        />
      </View>
      <Text>{closestTrashDistance}</Text>
      <Button
        title="지도 보기"
        onPress={() =>
          navigation.navigate('AjouNmap', {
            userLocation : userLocation,
            closestTrash : closestTrash,
          })
        }
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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