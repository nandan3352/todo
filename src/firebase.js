import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvatZ1SlzzwYlZfhP_YVH1l3CTbzpiYrQ",
  authDomain: "todo-auth-32d2a.firebaseapp.com",
  projectId: "todo-auth-32d2a",
  storageBucket: "todo-auth-32d2a.appspot.com",
  messagingSenderId: "490094080150",
  appId: "1:490094080150:web:6056b1d0f01d02f79852b7",
  measurementId: "G-C11LHJJS4W"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};
