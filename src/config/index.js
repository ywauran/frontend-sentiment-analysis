// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl2FfV_W7DIJ3yrwaVQE_L1xOFcYrgv9Y",
  authDomain: "sentiment-analysis-djp.firebaseapp.com",
  databaseURL: "https://sentiment-analysis-djp-default-rtdb.firebaseio.com",
  projectId: "sentiment-analysis-djp",
  storageBucket: "sentiment-analysis-djp.appspot.com",
  messagingSenderId: "302856154757",
  appId: "1:302856154757:web:f8438df6f011630a6303ec",
  measurementId: "G-BDSXRHZ8FC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
