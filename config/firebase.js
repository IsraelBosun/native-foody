// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWKgRLWPhBl5anGu_-cCPgCMljYC1FhFw",
  authDomain: "food-app-e13ff.firebaseapp.com",
  projectId: "food-app-e13ff",
  storageBucket: "food-app-e13ff.appspot.com",
  messagingSenderId: "251043140062",
  appId: "1:251043140062:web:e714871b88473dd7edcd4f",
  measurementId: "G-3MERDV9Z3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export {auth}