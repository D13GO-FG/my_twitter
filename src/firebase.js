import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBkyFZaqQ5KmDsI7gNBiaUGcgkCBjmxZ-U",
    authDomain: "twitter-clone-8f01c.firebaseapp.com",
    databaseURL: "https://twitter-clone-8f01c.firebaseio.com",
    projectId: "twitter-clone-8f01c",
    storageBucket: "twitter-clone-8f01c.appspot.com",
    messagingSenderId: "1005618461547",
    appId: "1:1005618461547:web:e4c3a84701abb247f1aa2e",
    measurementId: "G-HNLW5GJFBP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
