import * as React from 'react';
import { View, Text, Button, Platform, Alert, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import AjouTrashScreen from './Screen/AjouTrashScreen';
import Ajou3DScreen from './Screen/Ajou3DScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AjouTrash" component={AjouTrashScreen} />
        <Stack.Screen name="Ajou3D" component={Ajou3DScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;