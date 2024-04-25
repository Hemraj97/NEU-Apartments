// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_FIREBASE_KEY);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-estate-59007.firebaseapp.com",
  projectId: "mern-estate-59007",
  storageBucket: "mern-estate-59007.appspot.com",
  messagingSenderId: "703278295363",
  appId: "1:703278295363:web:11cdcc43d66b3cb6c367f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };