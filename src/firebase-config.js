import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJd6nsF7EnKq8GemBK2yCPfl0z8ZG-oFk",
  authDomain: "authentication-994aa.firebaseapp.com",
  projectId: "authentication-994aa",
  storageBucket: "authentication-994aa.appspot.com",
  messagingSenderId: "966661074230",
  appId: "1:966661074230:web:27dcf32e3b07ec54841797"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)