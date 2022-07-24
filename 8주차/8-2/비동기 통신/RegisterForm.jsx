import React, { useRef } from "react";
import styled from "styled-components";

export default function RegisterForm({ className, onSubmit }) {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (email.length === 0 || password.length === 0) {
      return;
    }

    if (confirmPassword !== password) {
      confirmPasswordRef.current.setCustomValidity("Different from password");
      return;
    }

    const formData = {
      email,
      password,
    };

    onSubmit(formData);
    formRef.current.reset();
  };

  return (
    <Container className={className}>
      <form ref={formRef}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter email."
            required
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            autocomplete="off"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            required
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            placeholder="Enter password."
          />
        </fieldset>

        <fieldset>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            required
            ref={confirmPasswordRef}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Enter password again."
          />
        </fieldset>
        <RegisterButton onClick={submitForm}>Register</RegisterButton>
      </form>
    </Container>
  );
}

const Container = styled.div`
  fieldset {
    margin: 0;
    box-sizing: border-box;
    width: 100%;
  }

  label {
    margin-right: 4px;
  }

  input[type="password"]:invalid,
  input[type="email"]:invalid {
    border: 1px solid red;
  }

  input[type="password"]:valid,
  input[type="email"]:valid {
    border: 1px solid green;
  }

  form:invalid {
    border: 5px solid #ffdddd;
  }
`;

const RegisterButton = styled.button.attrs({ type: "submit" })`
  width: 100%;
  height: 40px;
`;
