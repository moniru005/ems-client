// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Chf_4Y61kaKiMYIzBljuHIjzqZZwtQU",
  authDomain: "ems-client-side.firebaseapp.com",
  projectId: "ems-client-side",
  storageBucket: "ems-client-side.appspot.com",
  messagingSenderId: "276933497397",
  appId: "1:276933497397:web:19a5b848dcd8050c6d177c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;