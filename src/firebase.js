import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCDjAYRdA49hcVt26EUUn4cu7PYclsEXcM",
    authDomain: "on-demand-home-services.firebaseapp.com",
    projectId: "on-demand-home-services",
    storageBucket: "on-demand-home-services.appspot.com",
    messagingSenderId: "756808025655",
    appId: "1:756808025655:web:a27584f1690be822d7e1b2",
    measurementId: "G-N7BMNSREJX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;