// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9KpeEZSklfzFqow1sp2DcPF8Agl47A9c",
  authDomain: "portfolio-91596.firebaseapp.com",
  projectId: "portfolio-91596",
  storageBucket: "portfolio-91596.firebasestorage.app",
  messagingSenderId: "1080185528201",
  appId: "1:1080185528201:web:e42a5790090019dc760b58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
