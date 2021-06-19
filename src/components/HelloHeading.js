import React, { useEffect, useRef } from "react";

const containerStyle = {
  marginBottom: "15px",
  marginLeft: "auto",
  marginRight: "auto",
};

export default function HelloHeading() {
  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e);
    };
    // window.addEventListener("mousemove", onMouseMove);
    return () => {
      //   window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  const renders = useRef(0);
  console.log("hello renders: ", renders.current++);

  return (
    <div style={containerStyle}>Hello! Please login with your credentials</div>
  );
}
