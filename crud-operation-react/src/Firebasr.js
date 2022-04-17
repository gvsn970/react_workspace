// Your web app's Firebase configuration
import * as firebase from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyAHxUvKhLH3ASnAGB_OeV5CmXHR5edIhXQ",
  authDomain: "test-api-8f383.firebaseapp.com",
  databaseURL: "https://test-api-8f383-default-rtdb.firebaseio.com",
  projectId: "test-api-8f383",
  storageBucket: "test-api-8f383.appspot.com",
  messagingSenderId: "960945328147",
  appId: "1:960945328147:web:4d9bba715832a4d12f6fe6",
};

// Initialize Firebase
var firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb;
