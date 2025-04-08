// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGfyuzJSbEaA36HbJZVxtvmEkM9ZRKDWg",
  authDomain: "login-aac85.firebaseapp.com",
  projectId: "login-aac85",
  storageBucket: "login-aac85.firebasestorage.app",
  messagingSenderId: "86605421185",
  appId: "1:86605421185:web:593e4b349a4466ead78b80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inputs

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

//submit

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
    event.preventDefault()
    alert(5)
})