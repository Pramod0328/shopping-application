// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArlm8QRQWzZj353beegozK_jOEnP_I9Os",
  authDomain: "busybuy-app-84d7b.firebaseapp.com",
  projectId: "busybuy-app-84d7b",
  storageBucket: "busybuy-app-84d7b.appspot.com",
  messagingSenderId: "319583087238",
  appId: "1:319583087238:web:4f6563d55f861f14777f07",
  measurementId: "G-4W20FKYS81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app); 

export {app,db,auth};