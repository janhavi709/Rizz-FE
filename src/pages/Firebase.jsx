
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpq0JcsrAjC0o5_Z9bhe-2EQQyKPn-YJo",
  authDomain: "authentication-af989.firebaseapp.com",
  projectId: "authentication-af989",
  storageBucket: "authentication-af989.firebasestorage.app",
  messagingSenderId: "740254256257",
  appId: "1:740254256257:web:be2223b83120bd08235180",
  measurementId: "G-0TCGL1NJD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;