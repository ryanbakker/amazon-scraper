import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "brightdata-7b53f.firebaseapp.com",
  projectId: "brightdata-7b53f",
  storageBucket: "brightdata-7b53f.appspot.com",
  messagingSenderId: "708008160093",
  appId: "1:708008160093:web:cef0565f4a051e185e96b4",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
