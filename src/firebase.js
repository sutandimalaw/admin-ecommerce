// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAT2M12bHDebuadQk63eJtvIm8Wrjnk8kg",

  authDomain: "ecommerce-824f1.firebaseapp.com",

  projectId: "ecommerce-824f1",

  storageBucket: "ecommerce-824f1.appspot.com",

  messagingSenderId: "563454058487",

  appId: "1:563454058487:web:600efed1b1a7b962b058f2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;