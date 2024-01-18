// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGJfFFaMsrqMUeaeo1Uh3Tv6CP6p53lMA",
  authDomain: "swigato-a198c.firebaseapp.com",
  projectId: "swigato-a198c",
  storageBucket: "swigato-a198c.appspot.com",
  messagingSenderId: "467400818172",
  appId: "1:467400818172:web:2338f6f002a7a25e660679",
  measurementId: "G-JFDGQEC46D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
