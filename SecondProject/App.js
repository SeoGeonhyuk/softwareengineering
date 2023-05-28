import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import AjouTrashScreen from './Screen/AjouTrashScreen';
import Ajou3DScreen from './Screen/Ajou3DScreen';
const Stack = createNativeStackNavigator();
function App() {
    return (React.createElement(NavigationContainer, null,
        React.createElement(Stack.Navigator, null,
            React.createElement(Stack.Screen, { name: "Home", component: HomeScreen }),
            React.createElement(Stack.Screen, { name: "Ajou3D", component: Ajou3DScreen }),
            React.createElement(Stack.Screen, { name: "AjouTrash", component: AjouTrashScreen }))));
}
export default App;
