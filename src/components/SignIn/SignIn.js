import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./SignIn.css";

const defaultFormFields = {
  email: "",
  password: "",
};
export default function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   alert("passwords do not match");
    //   return;
    // }

    // try {
    //   resetFormFields();
    // } catch (error) {
    //   if (error.code === "auth/email-already-in-use") {
    //     alert("Cannot create user, email already in use");
    //   } else {
    //     console.log("user creation encountered an error", error);
    //   }
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-text">
        <h2>Login</h2>
        <span>Get access to your Orders, Wishlist and Recommendations.</span>
      </div>
      <div className="sign-in-formContainer">
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">SignIn</Button>
        </form>
      </div>
    </div>
  );
}
