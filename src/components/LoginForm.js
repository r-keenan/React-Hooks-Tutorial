import React, { useState, useRef } from "react";

import useForm from "../customHooks/useForm";
import HelloHeading from "./HelloHeading";

const containerStyle = {
  paddingTop: "30px",
};

export default function LoginForm() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const [showHello, setShowHello] = useState(true);

  const inputRef = useRef();

  return (
    <div style={containerStyle}>
      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <HelloHeading />}
      <div>
        <label>Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
      <div>
        <label>First name</label>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          focus
        </button>
      </div>
    </div>
  );
}
