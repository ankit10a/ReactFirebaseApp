import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBvH9PcdmzWRoKKjYqXG7fT39jlRxPL2AA",
  authDomain: "reactfirebase-6098f.firebaseapp.com",
  databaseURL: "https://reactfirebase-6098f.firebaseio.com",
  projectId: "reactfirebase-6098f",
  storageBucket: "reactfirebase-6098f.appspot.com",
  messagingSenderId: "342993372295",
  appId: "1:342993372295:web:3832948ef005bcaa0e6422",
  measurementId: "G-HP2EW1PPNR"
};
const fire = firebase.initializeApp(config);
export default fire;
