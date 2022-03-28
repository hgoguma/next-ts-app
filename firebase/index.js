// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF9Q1bNlx7aULBqtVCUMyn77iocO6MJTs",
  authDomain: "next-ts-dff9a.firebaseapp.com",
  projectId: "next-ts-dff9a",
  storageBucket: "next-ts-dff9a.appspot.com",
  messagingSenderId: "574043472717",
  appId: "1:574043472717:web:ce1f3322a20f907f75ad04",
  measurementId: "G-RLSVM94GK8"
};

// Initialize Firebase
const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
export { firebaseApp }