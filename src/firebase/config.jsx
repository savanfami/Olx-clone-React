import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuNnEdVIasQ8FT4GeJGcBwd7TgU2jzHUQ",
  authDomain: "olx-clone-6f2c4.firebaseapp.com",
  projectId: "olx-clone-6f2c4",
  storageBucket: "olx-clone-6f2c4.appspot.com",
  messagingSenderId: "498106201258",
  appId: "1:498106201258:web:016b486a1b4cca35cd8cd3",
  measurementId: "G-MFG1KG64B7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
