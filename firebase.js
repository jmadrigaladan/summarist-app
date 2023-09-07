// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsFIMGNKnU-ORPRL2M3sW-S5NF41TCBVE",
  authDomain: "summarist-app.firebaseapp.com",
  projectId: "summarist-app",
  storageBucket: "summarist-app.appspot.com",
  messagingSenderId: "91431535767",
  appId: "1:91431535767:web:7d9c9a844a2df70bfdd5d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const initFirebase = () => {
  return app;
};
