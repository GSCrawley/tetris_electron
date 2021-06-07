// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMMVP02fm1S2JxaVfs-1zYQe5slqXQGWk",
    authDomain: "tetris-auth.firebaseapp.com",
    databaseURL: "https://tetris-auth.firebaseio.com",
    projectId: "tetris-auth",
    storageBucket: "tetris-auth.appspot.com",
    messagingSenderId: "367047724762",
    appId: "1:367047724762:web:804eee9d89464acfa65fe3",
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;