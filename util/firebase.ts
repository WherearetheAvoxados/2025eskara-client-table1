// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3W4wFUQKmEFXCgT7koF-gJI3IQm44hV8",
  authDomain: "eskara-c2755.firebaseapp.com",
  projectId: "eskara-c2755",
  storageBucket: "eskara-c2755.firebasestorage.app",
  messagingSenderId: "724674562227",
  appId: "1:724674562227:web:24b9a260fb0ba73b13c8c6",
  measurementId: "G-W7FV6SGRHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
