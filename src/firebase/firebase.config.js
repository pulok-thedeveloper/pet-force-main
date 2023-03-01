// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
  apiKey: "AIzaSyC8_XYM-Ky-rGfCPMHPU4Te4zo4j1EOp3Y",
  authDomain: "pet-force.firebaseapp.com",
  projectId: "pet-force",
  storageBucket: "pet-force.appspot.com",
  messagingSenderId: "49875166810",
  appId: "1:49875166810:web:8e2c01a09229a0895f9a63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;