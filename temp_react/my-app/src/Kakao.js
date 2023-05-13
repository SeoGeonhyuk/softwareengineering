
import { useEffect } from "react";
import { db } from "./Firebase";
import "firebase/firestore"; 

// import { collection,getDocs } from 'firebase/firestore/lite';
import useGeolocation from "react-hook-geolocation";


const {kakao} = window;
function Kakao (){

  useEffect(()=>{ mapscript();
  },[])
  
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

      navigator.geolocation.getCurrentPosition(function(position) {
        const mylat = position.coords.latitude; 
        const mylon = position.coords.longitude; 
        const locPosition = new kakao.maps.LatLng(mylat, mylon); 
        var backMarkerImage = new kakao.maps.MarkerImage("image/myloc.png",
        new kakao.maps.Size(32, 40),
        {
            offset: new kakao.maps.Point(15, 29)
        }
    ); 

        console.log(mylat,mylon);
        new kakao.maps.Marker({
          map:map,
          position: locPosition,
          title:"mylocation",
          image: backMarkerImage,
        })

      });
    }
    }
    
  
  return (
    <div id="map" style={{
      width:'75vh',
      height:'75vh'
    }}></div>
    

  )
}

export default Kakao;