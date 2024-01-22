import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC1E56Bve4wlUZa75j4sPgDF68g9oeR4cc",
    authDomain: "conhecendo-firebase-227db.firebaseapp.com",
    projectId: "conhecendo-firebase-227db",
    storageBucket: "conhecendo-firebase-227db.appspot.com",
    messagingSenderId: "427528256705",
    appId: "1:427528256705:web:40aaa22438a73585f76840",
    measurementId: "G-J0WZB8JHL9"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)


