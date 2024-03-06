import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO-R7xFOugQxoeA3oOXiAZlFwfuXS7uwQ",
  authDomain: "eshop-3e9c1.firebaseapp.com",
  projectId: "eshop-3e9c1",
  storageBucket: "eshop-3e9c1.appspot.com",
  messagingSenderId: "595985211894",
  appId: "1:595985211894:web:c4629a02001300fdd7e7d7",
  measurementId: "G-F2SLTMQ7TE"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);