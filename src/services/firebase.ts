// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHj2_fMghPNnhqttRyrOgpis76FfM6EGM",
  authDomain: "portfolio-e50f6.firebaseapp.com",
  databaseURL: "https://portfolio-e50f6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-e50f6",
  storageBucket: "portfolio-e50f6.firebasestorage.app",
  messagingSenderId: "976007183655",
  appId: "1:976007183655:web:7361f932c5d20926b4bd02",
  measurementId: "G-KRLTR87NFF"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
