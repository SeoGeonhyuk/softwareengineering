
import { useState, useEffect, useRef } from "react";
import { db } from "./Firebase";
import "firebase/firestore"; 

import { collection,getDocs } from 'firebase/firestore/lite';
import useGeolocation from "react-hook-geolocation";
import {getDistance,setLocationList,setRecording,setcoords,setWatchId} from "geolib";

const {kakao} = window;
function Kakao (){

  useEffect(()=>{ mapscript();},[])
  

  const [loctaion, setLocation] = useState({});
  const [direction, setDirection] = useState(null);
  const [error, setError] = useState(null);
  let options;
  const locationWatchId = useRef(null);

  const handleOrientationChange = (event) => {
    if (event.absolute === true && event.alpha !== null) {
      const newDirection = event.alpha.toFixed(2);
      setDirection(newDirection);
    }
  };


  const handleSuccess = (pos)=>{
    const{latitude,longitude} = pos.coords;

    setLocation({latitude, longitude}) // 현재 위치
  }

  const handleError = (error) =>{
    setError(error.message);
  }
  options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  }

  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
    locationWatchId.current = geolocation.watchPosition(handleSuccess,handleError,options);
    
    window.addEventListener('deviceorientation', handleOrientationChange);

    return () => {
      geolocation.clearWatch(locationWatchId.current);
      window.removeEventListener('deviceorientation', handleOrientationChange);
    };
  },[options]);

  const mapscript = () => {
  const container = document.getElementById('map');
    const options = {
    center: new kakao.maps.LatLng(37.28229927325145,127.04354909387666),
    level: 4
    };
    var map = new kakao.maps.Map(container, options);
    db.collection('trash').get().then((res)=>{
      res.forEach((doc)=>{
              new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(doc.data().lat, doc.data().lng),
              title: doc.data().title,
            });
      })
    })
    if (navigator.geolocation) {
      const locPosition = new kakao.maps.LatLng(loctaion.latitude,loctaion.longitude);
      var backMarkerImage = new kakao.maps.MarkerImage("image/myloc.png",
      new kakao.maps.Size(32, 40),
      {
        offset: new kakao.maps.Point(15, 29)
      }); 
      console.log(loctaion);
      console.log(direction);
      new kakao.maps.Marker({
        map:map,
        position: locPosition,
        title:"mylocation",
        image: backMarkerImage,
      })
    }
  }
    
  
  return (
    <div id="map" style={{
      width:'75vh',
      height:'75vh'
    }}>
    </div>
    

  )
}

export default Kakao;