import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzrjhQdfCS3Eft-raGiTsSkZZ1kYl73XU",
  authDomain: "kings-clothing-db.firebaseapp.com",
  projectId: "kings-clothing-db",
  storageBucket: "kings-clothing-db.appspot.com",
  messagingSenderId: "187714929183",
  appId: "1:187714929183:web:810e91cd346e9e94914b2a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signIinWithGooglePopup = () => signInWithPopup(auth, provider);
