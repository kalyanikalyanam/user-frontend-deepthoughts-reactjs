import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyD-DByy3V6VKzHPJkaFn830rm9yf87Rafs",
  authDomain: "crud-74e71.firebaseapp.com",
  databaseURL: "https://crud-74e71.firebaseio.com",
  projectId: "crud-74e71",
  storageBucket: "crud-74e71.appspot.com",
  messagingSenderId: "858404756180",
  appId: "1:858404756180:web:614898eb1d2eaec6",
};

firebase.initializeApp(config);
export default firebase;
