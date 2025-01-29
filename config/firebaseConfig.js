// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
// import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js"; // https://github.com/firebase/firebase-js-sdk/issues/7584

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHWfojTd-lSc1ijBIxRSY0yX7wT1p2LSc",
  authDomain: "spontan-12440.firebaseapp.com",
  projectId: "spontan-12440",
  storageBucket: "spontan-12440.firebasestorage.app",
  messagingSenderId: "881967762465",
  appId: "1:881967762465:web:3af7e5aacaf4059c8a2760",
  measurementId: "G-ZY39BE4F66",
};
// https://console.firebase.google.com/u/0/project/spontan-12440/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project, see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication
// https://github.com/expo/fyi/blob/main/firebase-js-auth-setup.md
const initAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const auth = getAuth(); // can be used any time after initialization

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
