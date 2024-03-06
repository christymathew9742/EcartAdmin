import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAO-R7xFOugQxoeA3oOXiAZlFwfuXS7uwQ",
  authDomain: "eshop-3e9c1.firebaseapp.com",
  databaseURL: "https://eshop-3e9c1-default-rtdb.firebaseio.com",
  projectId: "eshop-3e9c1",
  storageBucket: "eshop-3e9c1.appspot.com",
  messagingSenderId: "595985211894",
  appId: "1:595985211894:web:1da51d84015aab78d7e7d7",
  measurementId: "G-HGPEEHLR5W"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);