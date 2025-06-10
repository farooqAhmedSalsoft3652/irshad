import React from "react";
import "./style.css";

const CustomButton = ({
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
  isPending = false, // loading state flag
  loadingText = "Loading…", // optional loading text
  text = "Click to load", // default text
  children,
  style,
}) => {
  return (
    <button
      type={type}
      style={style}
      className={`btn btn-${variant} ${className}`}
      onClick={!isPending ? onClick : null}
      disabled={disabled || isPending}
    >
      {isPending ? loadingText : children || text}
    </button>
  );
};

export default CustomButton;
