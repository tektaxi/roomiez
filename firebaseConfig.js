// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from 'firebase/database';

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

export const writeData = async (path, data) => {
    try {
        const dbRef = ref(database, path); // Reference to the desired path
        const newRef = push(dbRef); // Generate a new unique key
        await set(newRef, data); // Set data at the new reference
        return newRef.key; // Return the key of the newly added data
    } catch (error) {
        console.error('Error adding data:', error);
        throw error; // Re-throw the error so it can be handled by the caller
    }
};

export const readData = async (path) => {
    try {
        const dbRef = ref(database); // Reference the root of the database
        const snapshot = await get(child(dbRef, path)); // Get data at the specified path

        if (snapshot.exists()) {
            return snapshot.val(); // Return the data
        } else {
            console.log('No data available at path:', path);
            return null; // Return null if no data exists
        }
    } catch (error) {
        console.error('Error reading data:', error);
        throw error; // Re-throw the error so the caller can handle it
    }
};

export { database };