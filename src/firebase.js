// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBgH4Gzp4Lvp0LsPHW868QB9eSt9KTw32w",
  authDomain: "petstore-d4f00.firebaseapp.com",
  projectId: "petstore-d4f00",
  storageBucket: "petstore-d4f00.appspot.com",
  messagingSenderId: "75319531437",
  appId: "1:75319531437:web:d33674262433f3b123f324",
  measurementId: "G-045SX05DYX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};