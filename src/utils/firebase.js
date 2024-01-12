// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdbo_vIjmkJJsIXGXndnh6fiRdqAtu0_A",
  authDomain: "netflixgpt-6f299.firebaseapp.com",
  projectId: "netflixgpt-6f299",
  storageBucket: "netflixgpt-6f299.appspot.com",
  messagingSenderId: "200400537905",
  appId: "1:200400537905:web:63a5eccf4e865b48ebc810",
  measurementId: "G-R4J2KN01QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);