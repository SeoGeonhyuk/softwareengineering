import * as React from 'react';
import { Button, View, Text } from 'react-native';
import geolocation from 'react-native-geolocation-service';
//
// LinearLayout linearLayoutTmap = (LinearLayout)findViewById(R.id.linearLayoutTmap);
//       TMapView tMapView = new TMapView(this);
//
//       tMapView.setSKTMapApiKey( "3Sjdm3sS127wMtVLgM3B666RzUG0otdIagWKhrra" );
//       linearLayoutTmap.addView( tMapView );



function HomeScreen({ navigation }) {

    return (React.createElement(View, { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } },
        React.createElement(Text, null, ),

        React.createElement(Button, { title: "go to Ajou3D", onPress: () => navigation.navigate('Ajou3D') }),
        React.createElement(Button, { title: "go to AjouTrash", onPress: () => navigation.navigate('AjouTrash') })));
}
export default HomeScreen;