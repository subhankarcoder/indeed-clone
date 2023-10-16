import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAa4PFdoRvp6tO-IhzDWwPKkIEWJsLwTkU",
    authDomain: "indeed-auth-d3045.firebaseapp.com",
    projectId: "indeed-auth-d3045",
    storageBucket: "indeed-auth-d3045.appspot.com",
    messagingSenderId: "878059707482",
    appId: "1:878059707482:web:a7af88a00549c371864c63",
    measurementId: "G-QMF9XBX2LW"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);