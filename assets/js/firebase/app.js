// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR8alTQRNNi7yXoCDHZn9pjI4KtOqfSAA",
    authDomain: "mundo-invertido-10d91.firebaseapp.com",
    projectId: "mundo-invertido-10d91",
    storageBucket: "mundo-invertido-10d91.appspot.com",
    messagingSenderId: "340397887932",
    appId: "1:340397887932:web:28cc0a4dd7f731073d5bb9"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;