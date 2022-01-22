import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBf3BrudP0r8QqKfbEQljl0wfJW_qJCZpQ",
    authDomain: "react-firebase-2ba4c.firebaseapp.com",
    projectId: "react-firebase-2ba4c",
    storageBucket: "react-firebase-2ba4c.appspot.com",
    messagingSenderId: "202623092769",
    appId: "1:202623092769:web:837c863159d2b72a4abb60",
    measurementId: "G-NR5VX9GKVB"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

