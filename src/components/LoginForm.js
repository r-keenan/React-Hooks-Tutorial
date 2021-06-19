import React from "react";

import useForm from "../customHooks/useForm";

const containerStyle = {
  paddingTop: "30px",
};

export default function LoginForm() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div style={containerStyle}>
      <div>
        <label>Email</label>
        <input name="email" value={values.email} onChange={handleChange} />
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
    </div>
  );
}
