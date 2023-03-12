import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBON04_zYrc1mTjMdlzO9-LkD5LhChZlZQ",
  authDomain: "e-commerce-7f72c.firebaseapp.com",
  projectId: "e-commerce-7f72c",
  storageBucket: "e-commerce-7f72c.appspot.com",
  messagingSenderId: "358806184961",
  appId: "1:358806184961:web:39f5e537c051d090250c00"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
