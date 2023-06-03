import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';



class UserLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLatitude: null,
      currentLongitude: null,
    };

    this.watchId = null; // 위치 정보 감시를 위한 watchId 변수
  }

  // 사용자의 실시간 위치 감시
  componentDidMount() {

    this.watchId = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.setState({ currentLatitude: latitude, currentLongitude: longitude });
        this.props.onLocationUpdate(latitude, longitude);
      },
      error => {
        console.error('Failed to get current location:', error);
      },
      { enableHighAccuracy: true, distanceFilter: 5 }
    );
  }


  // 사용자의 위치 탐색 중지
  componentWillUnmount() {

    if (this.watchId) {
      Geolocation.clearWatch(this.watchId);
    }
  }

  render() {
    const { currentLatitude, currentLongitude } = this.state;
    return (
      <View>
      </View>
    );
  }
}

export default UserLocation;