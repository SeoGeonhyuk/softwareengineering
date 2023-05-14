import React from "react";
import userLocation from "./userLocation";
import {getDistance,setLocationList,setRecording,setcoords,setWatchId} from "geolib";

const getLocation = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
        let before_record = null;
        const newId = navigator.geolocation.watchPosition(
            (position) => {
                let updateFlag = true;
                const now = new Date();
                const new_record = {
                    err: 0,
                    time: now.toLocaleTimeString(),
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                if (before_record !== null) {
                    const dist = getDistance({
                        lat1: before_record.latitude,
                        lon1: before_record.longitude,
                        lat2: new_record.latitude,
                        lon2: new_record.longitude,
                    });
                    if(dist < 0.005){
                        updateFlag = false;
                    }
                } 
                if(updateFlag){
                    setcoords(new_record);
                    before_record = new_record;
                    setLocationList((locationList) => [
                        ...locationList,
                        new_record,
                    ]);
                }
            },
            (err) => {
                console.log(err.message);
            },
            { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
        );
        setRecording(true);
        setWatchId(newId);
    }
};

