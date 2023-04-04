// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKJmek52mhgIJtLsTZpoSv69AbRXkbcNI",
  authDomain: "virtual-acharya.firebaseapp.com",
  projectId: "virtual-acharya",
  storageBucket: "virtual-acharya.appspot.com",
  messagingSenderId: "815491238684",
  appId: "1:815491238684:web:afc98cac016fb887f808d9",
  measurementId: "G-KT0EX12X0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

