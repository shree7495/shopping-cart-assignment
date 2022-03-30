import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./SignUp.css";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function SignUp() {
  // return (
  // <div className="signUp-container">
  //   <div className="signUp-text">
  //     <h3>SignUp</h3>
  //     <p>We do not share your personal data with anyone</p>
  //   </div>
  //   <div className="signUp-form"></div>
  // </div>
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      // const { user } = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      // await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-text">
        <h2>Signup</h2>
        <span>We do not share your personal data with anyone.</span>
      </div>
      <div className="sign-up-formContainer">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="First Name"
            type="text"
            required
            onChange={handleChange}
            name="firstName"
            value={firstName}
          />
          <FormInput
            label="Last Name"
            type="text"
            required
            onChange={handleChange}
            name="lastName"
            value={lastName}
          />

          <FormInput
            label="Email"
            type="text"
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

          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}
