import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const ClosestTrash = ({ userLocation, trashLocationList, setClosestTrash, setClosestTrashDirection , setClosestTrashDistance }) => {
  const calculateDistance = (loc1, loc2) => {
    const earthRadius = 6371; // 지구 반지름 (단위: km)

    const latDiff = (loc2.lat - loc1[0]) * (Math.PI / 180);
    const lonDiff = (loc2.lng - loc1[1]) * (Math.PI / 180);

    const a =
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(loc1[0] * (Math.PI / 180)) *
        Math.cos(loc2.lat * (Math.PI / 180)) *
        Math.sin(lonDiff / 2) *
        Math.sin(lonDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    return distance;
  };


const calculateDirection = (userLocation, closestTrash) => {
    const latDiff = closestTrash.lat - userLocation[0];
    const lonDiff = closestTrash.lng - userLocation[1];
    const radian = Math.atan2(lonDiff, latDiff);
    const degree = radian * (180 / Math.PI);
    return degree >= 0 ? degree : 360 + degree;
  };

  useEffect(() => {
    const calculateClosestTrash = () => {
      let minDistance = Number.MAX_VALUE;
      let closest = null;

      trashLocationList.forEach((trash) => {
        const distance = calculateDistance(userLocation, trash);
        if (distance < minDistance) {
          minDistance = distance;
          closest = trash;
        }
      }

      );

      if (closest) {
        setClosestTrash(closest);
        const direction = calculateDirection(userLocation, closest);
        setClosestTrashDirection(direction);
        setClosestTrashDistance(minDistance);
      }
    };

    if (userLocation && trashLocationList.length > 0) {
      calculateClosestTrash();
    }
  }, [userLocation, trashLocationList, setClosestTrash, setClosestTrashDirection , setClosestTrashDistance]);

  return null;
};

export default ClosestTrash;