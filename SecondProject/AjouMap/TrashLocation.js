import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';

class TrashLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trashList: [],
    };
  }

  fetchTrashList = async () => {
    try {
      const querySnapShot = await firestore().collection('trash').get();
      const trashList = [];
      querySnapShot.forEach((doc) => {
        const trash = doc.data();
        trashList.push(trash);
      });
      this.setState({ trashList });
      this.props.onTrashLocationUpdate(trashList);
    } catch (error) {
      console.error('Error fetching trash bins:', error);
    }
  };


  componentDidMount() {
    this.fetchTrashList();
  }

  render() {
     var { trashList } = this.state;
    return (
      <View>
        <Text>Trash Location Component</Text>
      </View>
    );
  }
}
class FindTrash extends Component{




}

export default TrashLocation;