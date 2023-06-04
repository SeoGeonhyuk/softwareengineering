import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Arrow = ({ userDirection, closestTrashDirection, setArrowAngle }) => {
  useEffect(() => {
    setArrowAngle(userDirection - closestTrashDirection);
  }, [userDirection, closestTrashDirection, setArrowAngle]);

  return null;
};

export default Arrow;