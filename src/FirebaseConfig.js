// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD-g6v-Qi2_n6gvbDyVgp1UXybNSu7T0r8",

  authDomain: "react-crud-3018c.firebaseapp.com",

  projectId: "react-crud-3018c",

  storageBucket: "react-crud-3018c.appspot.com",

  messagingSenderId: "446721754786",

  appId: "1:446721754786:web:d28f8fcb0c6ebcb15ab9fb",

  measurementId: "G-L7P9DJYZP3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app )

