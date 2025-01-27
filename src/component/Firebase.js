import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdTzMzxkJFIybSjfR-Cr1B8DBt7J2hSPE",
    authDomain: "fir-web-app-d34f4.firebaseapp.com",
    projectId: "fir-web-app-d34f4",
    storageBucket: "fir-web-app-d34f4.firebasestorage.app",
    messagingSenderId: "598177490888",
    appId: "1:598177490888:web:198c9578dd187049b302fd",
    databaseURL: "https://fir-web-app-d34f4-default-rtdb.firebaseio.com",
  };
  
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);