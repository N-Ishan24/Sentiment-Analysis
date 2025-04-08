
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA3kwZCAtoYCLSwNqG4CQqhwK4-n72IIfQ",
    authDomain: "login-d3992.firebaseapp.com",
    projectId: "login-d3992",
    storageBucket: "login-d3992.firebasestorage.app",
    messagingSenderId: "435967086271",
    appId: "1:435967086271:web:ae277816bdf403ac8ec00a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en"
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth,provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "../login.html";
    
    
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})

