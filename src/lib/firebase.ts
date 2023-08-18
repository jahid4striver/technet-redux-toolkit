// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0iczevq8heE1eJuO749rZmBrdAf1398k",
    authDomain: "technet-redux-4c8b9.firebaseapp.com",
    projectId: "technet-redux-4c8b9",
    storageBucket: "technet-redux-4c8b9.appspot.com",
    messagingSenderId: "217336790617",
    appId: "1:217336790617:web:1675c936dac4bc00e9fb48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;