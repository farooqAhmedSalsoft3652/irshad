import React from "react";
import "./style.css";

const CustomButton = (props) => {
  // Ensure onClick is always a function or provide a default function
  const handleClick =
    typeof props?.onClick === "function" ? props.onClick : () => {};

  return (
    <button
      style={props?.style}
      className={`${props?.variant} ${props?.className}`}
      type={props?.type || "button"}
      onClick={handleClick}
      disabled={props?.isPending}
    >
      {props?.isPending ? props?.pendingText : props?.text}   { props?.children}
    </button>
  );
};

export default CustomButton;
