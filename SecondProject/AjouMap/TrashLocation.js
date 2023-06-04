import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const TrashLocation = ({ setTrashLocationList }) => {
  useEffect(() => {
    const fetchTrashList = async () => {
      try {
        const querySnapshot = await firestore().collection('trash').get();
        const trashList = querySnapshot.docs.map((doc) => doc.data());
        setTrashLocationList(trashList);
      } catch (error) {
        console.error('Error fetching trash bins:', error);
      }
    };

    fetchTrashList();
  }, []);

  return null;
};

export default TrashLocation;