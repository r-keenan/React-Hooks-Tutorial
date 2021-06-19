import React, { useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState("");

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
}
