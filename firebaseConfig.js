// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQz3X2FCM2REHIqMArBJFHECkxsfUj--w",
    authDomain: "roomiez-codejam14.firebaseapp.com",
    databaseURL: "https://roomiez-codejam14-default-rtdb.firebaseio.com",
    projectId: "roomiez-codejam14",
    storageBucket: "roomiez-codejam14.firebasestorage.app",
    messagingSenderId: "470877661579",
    appId: "1:470877661579:web:0acf78c9fa05401553a78e",
    measurementId: "G-G0TH4FXCJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}