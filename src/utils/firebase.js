// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6de7DgBZhFkXqGGje4YAGDP0vaN8WLtE",
  authDomain: "netflix-e3604.firebaseapp.com",
  projectId: "netflix-e3604",
  storageBucket: "netflix-e3604.appspot.com",
  messagingSenderId: "89816615489",
  appId: "1:89816615489:web:83bdbba1a10d2b9f1914c0",
  measurementId: "G-36LQ33N155",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
