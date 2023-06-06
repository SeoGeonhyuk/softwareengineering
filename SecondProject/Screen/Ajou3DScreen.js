/* import * as React from 'react';
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
export default Ajou3DScreen; */

import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Ajou3DScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>내부 지도를 보고싶은 건물을 선택하세요.</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.text}></Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Paldal')}>
        <Text style={styles.buttonText}>팔달관</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Seongho')}>
        <Text style={styles.buttonText}>성호관</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sanhak')}>
        <Text style={styles.buttonText}>산학협력원</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Eulgok')}>
        <Text style={styles.buttonText}>율곡관</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Ajou3DScreen;