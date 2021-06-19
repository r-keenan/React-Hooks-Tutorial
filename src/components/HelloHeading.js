import React, { useEffect } from "react";

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

  return (
    <div style={containerStyle}>Hello! Please login with your credentials</div>
  );
}
