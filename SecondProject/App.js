import React, { Component, useEffect } from 'react';
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
import AjouNMap from './AjouMap/AjouNMap';
import TmapScreen from './Screen/TmapScreen'
const Stack = createNativeStackNavigator();

//  React.useEffect(() => {
//    setTimeout(() => {
//      SplashScreen.hide();
//    }, 3000);
//  }, []);

class App extends Component {

  componentDidMount(){
    setTimeout(() => {
          SplashScreen.hide();
        }, 3000);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Ajou3D">
            {(props) => <Ajou3DScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="AjouTrashSearch">
            {(props) => <AjouTrashScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="AjouNMap">
            {(props) => <AjouNMap {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Tmap">
                      {(props) => <TmapScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Seongho">
                      {(props) => <Seongho {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Paldal">
                                {(props) => <Paldal {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Eulgok">
                                {(props) => <Eulgok {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Sanhak">
                                {(props) => <Sanhak {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
