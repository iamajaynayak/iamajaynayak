import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDrOYEiZg-cxHdyikaA0WVKQIYcpGiqbXY",
  authDomain: "myportfolio-c651a.firebaseapp.com",
  databaseURL: "https://myportfolio-c651a.firebaseio.com",
  projectId: "myportfolio-c651a",
  storageBucket: "myportfolio-c651a.appspot.com",
  messagingSenderId: "678468758415",
  appId: "1:678468758415:web:08d480baa6e1ba5e74b9fa",
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;

// Think about the collection and document
