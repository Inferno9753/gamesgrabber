import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8Eh6Fld1H1ImIOpW0NtG8nM7cB9vdyQM",
  authDomain: "gamegrabber-5820c.firebaseapp.com",
  projectId: "gamegrabber-5820c",
  storageBucket: "gamegrabber-5820c.appspot.com",
  messagingSenderId: "852394854926",
  appId: "1:852394854926:web:428ebf326f8ef5802d4a5f"
};

const app = initializeApp(firebaseConfig); 
export const auth=getAuth(app);
export const db=getFirestore(app);