// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzKuVtuQ3c_GUk34psSXr2fwpldcAbzS4",
  authDomain: "netflix-clone-6f2e0.firebaseapp.com",
  projectId: "netflix-clone-6f2e0",
  storageBucket: "netflix-clone-6f2e0.appspot.com",
  messagingSenderId: "753987494979",
  appId: "1:753987494979:web:451d9454309074e19ae0f6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
