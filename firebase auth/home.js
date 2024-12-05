
import {
    getAuth,
    onAuthStateChanged,
    signOut
  } from "./firebase.js";
  
  const auth = getAuth();
  
  // Check User Authentication
  onAuthStateChanged(auth, (user) => {
    if (user) {
        if (!user.emailVerified) {
            window.location.href = "verify-email.html"; // Redirect to verification page if email not verified
        } else {
            console.log("User is signed in and email is verified.");
        }
    } else {
        window.location.href = "./index.html"; // Redirect to login page
    }
  });
  
  // Sign Out Functionality
  document.querySelectorAll("#signOut").forEach((btn) =>
    btn.addEventListener("click", async () => {
        try {
            await signOut(auth);
            window.location.href = "./index.html"; // Redirect to login page after sign out
        } catch (error) {
            Swal.fire("Error", error.message, "error");
        }
    })
  );
  