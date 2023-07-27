import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2TplpFcUlTqfFuiqlzMQyGPivNN7j_1k",
  authDomain: "react-native-hw-67.firebaseapp.com",
  projectId: "react-native-hw-67",
  storageBucket: "react-native-hw-67.appspot.com",
  messagingSenderId: "241918283256",
  appId: "1:241918283256:web:b8b5b97214f026d41d9a0d",
  measurementId: "G-26PTKGXPG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
