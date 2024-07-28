
import { getApp, getApps, initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDTQgi2q_QVmpFQad_oo3TOjXQq-3NKzKU",
  authDomain: "chat-with-pdf-challenge-19e95.firebaseapp.com",
  projectId: "chat-with-pdf-challenge-19e95",
  storageBucket: "chat-with-pdf-challenge-19e95.appspot.com",
  messagingSenderId: "15226724516",
  appId: "1:15226724516:web:d9ac46e400d4d48cdf8631"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };