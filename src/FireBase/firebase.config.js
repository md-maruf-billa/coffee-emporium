// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLLDh6wnD79_1qcfkGHrJKSUTytTn-Vm4",
    authDomain: "coffees-emporium.firebaseapp.com",
    projectId: "coffees-emporium",
    storageBucket: "coffees-emporium.appspot.com",
    messagingSenderId: "289425934887",
    appId: "1:289425934887:web:2ba5fd67fbce8dc0899c02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;