
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  deleteUser,
  fetchSignInMethodsForEmail
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz0Qs91xvvdLTNfVfBGIBDxYt9igjmgfs",
  authDomain: "social-app-47eb4.firebaseapp.com",
  projectId: "social-app-47eb4",
  storageBucket: "social-app-47eb4.firebasestorage.app",
  messagingSenderId: "80538955886",
  appId: "1:80538955886:web:bb28c3f70bee282466767f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  getAuth,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  signInWithPopup,
  provider,
  signOut,
  deleteUser,
};

import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
  onSnapshot,
  orderBy,
  query,
  where,
  getDoc,

} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  getFirestore,
  db,
  doc,
  setDoc,
  Timestamp,
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
  onSnapshot,
  fetchSignInMethodsForEmail,
  orderBy,
  query,
  where,
  getDoc,

};
