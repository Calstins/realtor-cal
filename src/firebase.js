// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChbICyIojWR7Bzu1K-W0Rp49eB8ml3I_g",
  authDomain: "propertyxchange-01.firebaseapp.com",
  projectId: "propertyxchange-01",
  storageBucket: "propertyxchange-01.appspot.com",
  messagingSenderId: "867380290440",
  appId: "1:867380290440:web:5e8a8c1dab279e5f95103d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()