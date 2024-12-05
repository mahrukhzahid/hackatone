
import { getAuth, signInWithEmailAndPassword , GoogleAuthProvider , provider , auth , signInWithPopup } from "./firebase.js";


let signInBtn = document.getElementById("signInBtn");
let signInEmail = document.getElementById("signInEmail");
let signInPassword = document.getElementById("signInPassword");

let signIn = async () => {
  let email = signInEmail.value.trim();
  let password = signInPassword.value.trim();

  if (email === "" || password === "") {
    Swal.fire("Error", "Please fill out both fields.", "error");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (!user.emailVerified) {
      Swal.fire("Error", "Please verify your email first.", "error");
      return;
    }

    Swal.fire("Success", "Login successful!", "success");
    window.location.href = "home.html"; // Redirect to home page after successful login
  } catch (error) {
    Swal.fire("Error", error.message, "error");
  }
};

signInBtn.addEventListener("click", signIn);

// Google Login
let googleBtn = document.getElementById("googleBtn");

let googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    Swal.fire("Success", "Login successful!", "success");
    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  } catch (error) {
    Swal.fire("Error", "Google Login failed.", "error");
  }
};

googleBtn.addEventListener("click", googleLogin);
