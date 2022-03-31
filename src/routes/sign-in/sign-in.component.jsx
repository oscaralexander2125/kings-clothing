import React from "react";
import {
  createUserDocumentFromAuth,
  signIinWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signIinWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <h1>Sign in page!</h1>
    </div>
  );
};

export default SignIn;
