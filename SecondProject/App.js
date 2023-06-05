import React, { useEffect } from 'react';
import { View, Text, Button, Platform, Alert, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './Screen/HomeScreen';
import AjouTrashScreen from './Screen/AjouTrashScreen';
import Ajou3DScreen from './Screen/Ajou3DScreen';
import Seongho from './Screen/Ajou3D/Seongho';
import Sanhak from './Screen/Ajou3D/Sanhak';
import Paldal from './Screen/Ajou3D/Paldal';
import Eulgok from './Screen/Ajou3D/Eulgok';
import GetDirection from './AjouMap/GetDirection';
import AjouNmap from './AjouMap/AjouNmap';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ajou3D" component={Ajou3DScreen} />
        <Stack.Screen name="AjouTrashSearch" component={AjouTrashScreen} />
        <Stack.Screen name="GetDirection" component={GetDirection} />
        <Stack.Screen name="AjouNmap" component={AjouNmap} />
        <Stack.Screen name="Seongho" component={Seongho} />
        <Stack.Screen name="Paldal" component={Paldal} />
        <Stack.Screen name="Eulgok" component={Eulgok} />
        <Stack.Screen name="Sanhak" component={Sanhak} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;