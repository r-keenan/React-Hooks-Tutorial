import React, { useEffect } from "react";

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

  return <div>Hello! Please login with your credentials</div>;
}
