importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
import store from "../../redux/store";
import {assignDriver} from "../../redux/actions/booking/index";


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
  }

  firebase.initializeApp({
    apiKey: "AIzaSyBzsJWePM2cQnjKZaC69Pyph777zNbKSSw",
    authDomain: "taxiye.firebaseapp.com",
    databaseURL: "https://taxiye.firebaseio.com",
    projectId: "taxiye",
    storageBucket: "taxiye.appspot.com",
    messagingSenderId: "813634269297",
    appId: "1:813634269297:web:941ce44f08f87b8ca6abd0",
    measurementId: "G-2NP2F0E70X"
  });

  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function(payload) {
    console.log('Received message in the background ', payload);
    onMessage(messaging, (payload) => {
        console.log("Message received. ", payload);
        store.dispatch(assignDriver({
          driver_image: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png",
          arriving_in: "10 Minutes",
          user_name:"Ayele Tolosa",
          phone_no:"+251978367634",
          rating:4.5,
          vehicle_name:"Taxiye Blue",
          vehicle_no:"A983763"
        }));
      });
  });