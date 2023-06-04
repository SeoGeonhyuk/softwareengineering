import React, { useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';

const UserLocation = ({ setUserLocation }) => {
  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      error => {
        console.error('Failed to get current location:', error);
      },
      { enableHighAccuracy: true, distanceFilter: 5 }
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, [setUserLocation]);

  return null;
};

export default UserLocation;