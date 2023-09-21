import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2I_Z3fzaAwNxVD5HMbtdPqL_J3ABnCE0",
  authDomain: "devxpert-insa.firebaseapp.com",
  projectId: "devxpert-insa",
  storageBucket: "devxpert-insa.appspot.com",
  messagingSenderId: "1025820165223",
  appId: "1:1025820165223:web:4bad76adffec20fbfb80c2",
  measurementId: "G-SFFZVNQHPQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
