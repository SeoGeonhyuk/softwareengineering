import React, { useState, useEffect,useLayoutEffect } from 'react';
import { Platform, Text, View, StyleSheet,Dimensions,Image } from 'react-native';
//import Geolocation from 'react-native-geolocation-service';
import firestore from "@react-native-firebase/firestore";
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";

export const TrashXY = firestore().collection("trash");


function AjouTrashScreen() {

    const P0 = {latitude: 37.2822222, longitude: 127.04410553};


    return (<NaverMapView style={{width: '100%', height: '100%'}}
    center={{...P0, zoom: 15}}></NaverMapView>)
//        TrashXY.get().then((res)=>{
//                  res.forEach((doc)=>{
//                      console.log(doc.data())
//                      }
//                  )
//              }
//          )firebase 좌표
//    return (React.createElement(View, { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } },
//        React.createElement(Text, null, "AjouTrash")));

}
export default AjouTrashScreen;