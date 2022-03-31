import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5lPBGlOPf7PEKNsOh41A9COPxMkrwFZ4",
  authDomain: "whatsapp-v2-dfd7b.firebaseapp.com",
  projectId: "whatsapp-v2-dfd7b",
  storageBucket: "whatsapp-v2-dfd7b.appspot.com",
  messagingSenderId: "629940498845",
  appId: "1:629940498845:web:083f99e0f0f580f6acff74",
  measurementId: "G-M3PJP3ESSP",
};

export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
export const auth = getAuth();
provider.setCustomParameters({
  login_hint: "user@example.com",
});
