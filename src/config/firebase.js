import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMcxcorQ8Gai8nzQx7nEdsbOmOGWaI9Ww",
  authDomain: "affinatesale.firebaseapp.com",
  projectId: "affinatesale",
  storageBucket: "affinatesale.firebasestorage.app",
  messagingSenderId: "748149826707",
  appId: "1:748149826707:web:d1993d920376020999d966",
  measurementId: "G-WQ7B63ZCM0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//
const auth = getAuth();
const provider = new GoogleAuthProvider();
const fProvider = new FacebookAuthProvider();

export {
  app,
  auth,
  analytics,
  provider,
  signInWithPopup,
  fProvider,
};
