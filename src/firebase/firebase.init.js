// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3HfIM1lHgPKcbSWhfwQIkITz6o8a_DZo",
  authDomain: "route-auth-01-6fd7b.firebaseapp.com",
  projectId: "route-auth-01-6fd7b",
  storageBucket: "route-auth-01-6fd7b.appspot.com",
  messagingSenderId: "1085978012269",
  appId: "1:1085978012269:web:1e278316b3cb59943ead64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);