// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore/lite";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDbkn-zNom4TXNo-z21MV58j2DXBXhblcc",
  authDomain: "sw-practice-14296.firebaseapp.com",
  projectId: "sw-practice-14296",
  storageBucket: "sw-practice-14296.appspot.com",
  messagingSenderId: "631943371629",
  appId: "1:631943371629:web:48326a54be49c4be39d864",
  measurementId: "G-J6SEKM606E"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

