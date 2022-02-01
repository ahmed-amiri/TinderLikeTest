// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyAzTuSsjNSRVyOkXkhWVEVIbls0mkltElQ",
    authDomain: "tinderlikereact.firebaseapp.com",
    projectId: "tinderlikereact",
    storageBucket: "tinderlikereact.appspot.com",
    messagingSenderId: "686609873048",
    appId: "1:686609873048:web:8897e0a8e13b5050e578ed",
    measurementId: "G-62GJEBB2K5"
});

// Initialize Firebase
const db = getFirestore();

export default db;

