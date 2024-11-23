// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "roomiez-codejam14.firebaseapp.com",
    databaseURL: "https://roomiez-codejam14-default-rtdb.firebaseio.com",
    projectId: "roomiez-codejam14",
    storageBucket: "roomiez-codejam14.firebasestorage.app",
    messagingSenderId: "470877661579",
    appId: "1:470877661579:web:0acf78c9fa05401553a78e",
    databaseURL: "https://roomiez-codejam14-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };