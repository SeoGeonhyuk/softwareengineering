import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import CompassHeading from 'react-native-compass-heading';

const CompassScreen = () => {
  const [heading, setHeading] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  useEffect(() => {
    const degree_update_rate = 3;

    CompassHeading.start(degree_update_rate, ({ heading, accuracy }) => {
      setHeading(heading);
      setAccuracy(accuracy);
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);


  const direction = getDirection(heading);

  return (
    <Text>
      CompassHeading: {heading}°, Accuracy: {accuracy}
    </Text>
  );
};

export default CompassScreen;