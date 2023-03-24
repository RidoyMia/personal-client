// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ESfF1SqypV_NaXM5WqUmyC1mCe45wjg",
  authDomain: "personal-project-9bd27.firebaseapp.com",
  projectId: "personal-project-9bd27",
  storageBucket: "personal-project-9bd27.appspot.com",
  messagingSenderId: "171611589655",
  appId: "1:171611589655:web:1febc33a90f1e3e02ea052",
  measurementId: "G-K7NFZSY27H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;