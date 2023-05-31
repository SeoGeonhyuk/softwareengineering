import * as React from 'react';
import { View, Button, Text } from 'react-native';

function Ajou3DScreen({ navigation }) {

    return (React.createElement(View, { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } },
    React.createElement(Text, null, ),

    React.createElement(Button, { title: "Paldal", onPress: () => navigation.navigate('Paldal') }),
    React.createElement(Button, { title: "Seongho", onPress: () => navigation.navigate('Seongho') }),
    React.createElement(Button, { title: "Sanhak", onPress: () => navigation.navigate('Sanhak') }),
    React.createElement(Button, { title: "Eulgok", onPress: () => navigation.navigate('Eulgok') })
    ));
}
export default Ajou3DScreen;