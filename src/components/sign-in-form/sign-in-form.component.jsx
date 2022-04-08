import React, { useState } from "react";
import {
  signInAuthWithEmailAndPass,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  SignIn,
  SignInTitle,
  ButtonContainer,
} from "./sign-in-form.styles.jsx";

const defaultLoginFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultLoginFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFromFields = () => {
    setFormFields(defaultLoginFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPass(email, password);

      resetFromFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Password invalid");
          break;
        case "auth/user-not-found":
          alert("email not found: Create an account!");
          break;
        default:
          console.log(err);
      }
    }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignIn>
      <SignInTitle>Already have an account?</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUser}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignIn>
  );
};

export default SignInForm;
