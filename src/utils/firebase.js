// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI91NZSagCLB6jFAvCoca7p36VXmwKUDI",
  authDomain: "netflix-gpt-ac24e.firebaseapp.com",
  projectId: "netflix-gpt-ac24e",
  storageBucket: "netflix-gpt-ac24e.appspot.com",
  messagingSenderId: "125782248256",
  appId: "1:125782248256:web:9fec75cec8a3c5facb88a5",
  measurementId: "G-VKS3PZR1KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();