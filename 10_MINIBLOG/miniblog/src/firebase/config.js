import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOMKAUBf2A7BZQqguY650TTvLS8XGr8AY",
  authDomain: "miniblog-4d98e.firebaseapp.com",
  projectId: "miniblog-4d98e",
  storageBucket: "miniblog-4d98e.appspot.com",
  messagingSenderId: "21866341633",
  appId: "1:21866341633:web:5f21d927f6054094722700"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };