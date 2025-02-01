// Import Firebase functions
import { initializeApp } from "firebase/app";
// import { app } from '.././Components/';

// Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase অ্যাপ ইনিশিয়ালাইজ
const app = initializeApp(firebaseConfig);

export default app;
