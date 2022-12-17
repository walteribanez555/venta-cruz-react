// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Iw4cNojVLUev8LdXnvzgaz4tyiugao0",
  authDomain: "venta-cruz.firebaseapp.com",
  projectId: "venta-cruz",
  storageBucket: "venta-cruz.appspot.com",
  messagingSenderId: "868038759582",
  appId: "1:868038759582:web:1b623cfb955f41bb73578f",
  measurementId: "G-MMWV7YZ91M"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();