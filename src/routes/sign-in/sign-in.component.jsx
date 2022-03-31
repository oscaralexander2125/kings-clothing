import React from "react";
import { signIinWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signIinWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <h1>Sign in page!</h1>
    </div>
  );
};

export default SignIn;
