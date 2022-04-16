// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzsJWePM2cQnjKZaC69Pyph777zNbKSSw",
  authDomain: "taxiye.firebaseapp.com",
  databaseURL: "https://taxiye.firebaseio.com",
  projectId: "taxiye",
  storageBucket: "taxiye.appspot.com",
  messagingSenderId: "813634269297",
  appId: "1:813634269297:web:941ce44f08f87b8ca6abd0", 
  measurementId: "G-2NP2F0E70X" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

