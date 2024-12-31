// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKwrxDSn-A-xYXuhMM8SJJhNL0JWu44fY",
  authDomain: "booktracker-1487e.firebaseapp.com",
  projectId: "booktracker-1487e",
  storageBucket: "booktracker-1487e.firebasestorage.app",
  messagingSenderId: "219763550366",
  appId: "1:219763550366:web:813e36cbf68c6629fb338f",
  measurementId: "G-RCWR1X3YLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
