import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCrUP0G8aDc0fluv0hy4dStvrBsWky99V8",
    authDomain: "linkedin-clone-52733.firebaseapp.com",
    projectId: "linkedin-clone-52733",
    storageBucket: "linkedin-clone-52733.appspot.com",
    messagingSenderId: "510889847843",
    appId: "1:510889847843:web:401c168b009ec674c59596",
    measurementId: "G-3Z44N63ML3"
  };

// const firebaseApp = 
firebase.initializeApp(firebaseConfig)

var db = firebase.firestore();
var auth = firebase.auth()

export {db , auth};