import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt4u3mmeCINC3OP5E9pDYN1LFjbM4BsrQ",
  authDomain: "fir-education-99c93.firebaseapp.com",
  projectId: "fir-education-99c93",
  storageBucket: "fir-education-99c93.firebasestorage.app",
  messagingSenderId: "469588394192",
  appId: "1:469588394192:web:cfd7f4d5264e2e42b3ded5",
  measurementId: "G-P0Q9FFR871",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
