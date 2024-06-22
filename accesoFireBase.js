// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqF5XXn2r6LWGtm8rBbdH0x8sujrdQz4s",
  authDomain: "fruitappmulti.firebaseapp.com",
  projectId: "fruitappmulti",
  storageBucket: "fruitappmulti.appspot.com",
  messagingSenderId: "862552184171",
  appId: "1:862552184171:web:9b1130989295833a75a82e",
  measurementId: "G-32X2785Z1S"
};

// Initialize Firebase
const appFB = initializeApp(firebaseConfig);

export default appFB;

