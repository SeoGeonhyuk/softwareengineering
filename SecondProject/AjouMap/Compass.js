import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { accelerometer, gyroscope, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

setUpdateIntervalForType(SensorTypes.accelerometer, 100);
setUpdateIntervalForType(SensorTypes.gyroscope, 100);

const Compass = ({ userLocation, setUserDirection }) => {
  useEffect(() => {
    let gyroAvailable = false;
    let previousDirection = 0;

    const subscriptionGyroscope = gyroscope.subscribe(({ z }) => {
      if (!gyroAvailable) {
        gyroAvailable = true;
        return;
      }

      const delta = z * 180 / Math.PI * 0.1;
      previousDirection += delta;

      if (previousDirection >= 360) {
        previousDirection -= 360;
      } else if (previousDirection < 0) {
        previousDirection += 360;
      }

      setUserDirection(previousDirection);
    });

    const subscriptionAccelerometer = accelerometer.subscribe(({ x, y }) => {
      const angle = Math.atan2(x, y) * (180 / Math.PI);
      const normalizedAngle = (angle + 360) % 360;
      const direction = Math.round(normalizedAngle / 45) * 45;

      if (!gyroAvailable) {
        setUserDirection(direction);
      }
    });

    return () => {
      subscriptionGyroscope.unsubscribe();
      subscriptionAccelerometer.unsubscribe();
    };
  }, [setUserDirection]);

  return null;
};

export default Compass;