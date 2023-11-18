// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAR-KxFpTSOMQkL_KB4Jpiuo9Kt04nqNss",
  authDomain: "fir-60d7a.firebaseapp.com",
  databaseURL: "https://fir-60d7a-default-rtdb.firebaseio.com",
  projectId: "fir-60d7a",
  storageBucket: "fir-60d7a.appspot.com",
  messagingSenderId: "716773378468",
  appId: "1:716773378468:web:ac86e786a5315329b99931",
  measurementId: "G-X8D5MJ4Q3J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);//export 필수
