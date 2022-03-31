import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }

  return userDocRef;

  //if user data exists
  //create / set the document with the data from userAuth in my collection

  //if user data doesnt exists

  //return userDocRef
};
