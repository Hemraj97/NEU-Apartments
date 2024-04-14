// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "boston-estate.firebaseapp.com",
  projectId: "boston-estate",
  storageBucket: "boston-estate.appspot.com",
  messagingSenderId: "158714252367",
  appId: "1:158714252367:web:22a9679d8b4de3aaafee3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);