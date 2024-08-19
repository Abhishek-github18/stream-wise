// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACU4D65D0Jhf5zDtcfU3vkCHZWIKEQD8I",
  authDomain: "stream-wise.firebaseapp.com",
  projectId: "stream-wise",
  storageBucket: "stream-wise.appspot.com",
  messagingSenderId: "126027546551",
  appId: "1:126027546551:web:d56257d1b4b3408c4cf232",
  measurementId: "G-V3238JQ3MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();