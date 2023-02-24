import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzcscv1Rc-Kk9F_enEm-XA-afLh1G6t30",
  authDomain: "chatgpt-messenger-59a5c.firebaseapp.com",
  projectId: "chatgpt-messenger-59a5c",
  storageBucket: "chatgpt-messenger-59a5c.appspot.com",
  messagingSenderId: "18764115613",
  appId: "1:18764115613:web:7cb76ee4f9c5efc8892e74"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };