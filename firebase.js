import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAk86F24UPCi-uMt2E5qnh_iig3XWs8NR4",
    authDomain: "rits-browser-26f01.firebaseapp.com",
    projectId: "rits-browser-26f01",
    storageBucket: "rits-browser-26f01.appspot.com",
    messagingSenderId: "8025615781",
    appId: "1:8025615781:web:d8aef89ba4cc2bd889cc4c"
  };

//if the number of apps is none then initialize app or else use the existing app
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

//connection to firestore
const db = app.firestore();
const storage = firebase.storage();

export {db, storage};