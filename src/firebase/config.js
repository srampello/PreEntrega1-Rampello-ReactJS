// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBtOGfK2NfXQs0-Eop_rAYpPhFt5llrxQ",
  authDomain: "iceclub-ecommerce.firebaseapp.com",
  projectId: "iceclub-ecommerce",
  storageBucket: "iceclub-ecommerce.appspot.com",
  messagingSenderId: "569955194161",
  appId: "1:569955194161:web:4e3a3298cecabcf9f28c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebaseConnect = () => app

