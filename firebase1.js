// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore} from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk86F24UPCi-uMt2E5qnh_iig3XWs8NR4",
  authDomain: "rits-browser-26f01.firebaseapp.com",
  projectId: "rits-browser-26f01",
  storageBucket: "rits-browser-26f01.appspot.com",
  messagingSenderId: "8025615781",
  appId: "1:8025615781:web:d8aef89ba4cc2bd889cc4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();