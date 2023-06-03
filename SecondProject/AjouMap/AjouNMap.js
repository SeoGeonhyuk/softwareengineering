import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import NaverMapView, { Marker } from 'react-native-nmap';
import UserLocation from './UserLocation';
import CompassHeading from 'react-native-compass-heading';
import CompassScreen from './Compass';
//import TrashLocation from './TrashLocation';

class AjouNmap extends Component {
  state = {
    userLatitude: null,
    userLongitude: null,
//    trashLocationList: [],
  };

  // 위치 업데이트
  handleLocationUpdate = (userLatitude, userLongitude) => {
    this.setState({ userLatitude: userLatitude, userLongitude: userLongitude });
  };
//componentDidUpdate(){
//  setTrashLocationList = (trashList) => {
//      this.setState({ trashLocationList: trashList });
//  };
//}


  render() {

    const { userLatitude, userLongitude, trashLocationList } = this.state;
    const initCoords = { latitude: 37.2822222, longitude: 127.04410553 };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    });

    return (
      <View style={styles.container}>
         <CompassScreen/>
        <UserLocation onLocationUpdate={this.handleLocationUpdate}/>
        <NaverMapView style={styles.map} center={initCoords} zoom={13}>
          {(userLatitude && userLongitude) && <Marker coordinate={{ latitude: userLatitude, longitude: userLongitude }} />}
        </NaverMapView>
      </View>



    );
  }
}

export default AjouNmap;