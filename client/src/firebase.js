// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-9c28a.firebaseapp.com",
  projectId: "mern-auth-9c28a",
  storageBucket: "mern-auth-9c28a.appspot.com",
  messagingSenderId: "192346579040",
  appId: "1:192346579040:web:37e63010f3394dcf3ea305",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
