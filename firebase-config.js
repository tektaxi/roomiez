// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQz3X2FCM2REHIqMArBJFHECkxsfUj--w",
    authDomain: "roomiez-codejam14.firebaseapp.com",
    projectId: "roomiez-codejam14",
    storageBucket: "roomiez-codejam14.firebasestorage.app",
    messagingSenderId: "470877661579",
    appId: "1:470877661579:web:a57083db6f1526f253a78e",
    measurementId: "G-175HXGHXMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);