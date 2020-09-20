import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3cBzIqbLW5w6z1TBYmFf9lopvdjQecwA",
  authDomain: "clone-89d97.firebaseapp.com",
  databaseURL: "https://clone-89d97.firebaseio.com",
  projectId: "clone-89d97",
  storageBucket: "clone-89d97.appspot.com",
  messagingSenderId: "740610260283",
  appId: "1:740610260283:web:d358efba9b9db7c0b1cb1e",
  measurementId: "G-B1W4VSNXL0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

//queremos usar db y auth afuera de este archivo, los exportamos
export { db, auth };
