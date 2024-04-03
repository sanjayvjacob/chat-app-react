import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCGMV-6p4SUkaEPMkOuJRacQeKuRtt46Mg",
  authDomain: "chat-app-react-a8a12.firebaseapp.com",
  projectId: "chat-app-react-a8a12",
  storageBucket: "chat-app-react-a8a12.appspot.com",
  messagingSenderId: "108714467497",
  appId: "1:108714467497:web:059e39a795a51b5a2209b8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
