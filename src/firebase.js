// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import  { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSCDVAvNL75ZH2Aey55dKxSOgZs9P2678",
  authDomain: "chat-mate-b8b99.firebaseapp.com",
  projectId: "chat-mate-b8b99",
  storageBucket: "chat-mate-b8b99.appspot.com",
  messagingSenderId: "103051821537",
  appId: "1:103051821537:web:a0b6003d36635868a352a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);