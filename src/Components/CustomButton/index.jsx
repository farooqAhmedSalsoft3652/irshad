import React from "react";
import "./style.css";

const CustomButton = ({
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
  isPending = false,
  loadingText = "Loading…",
  text = "Click to load",
  children,
  style,
}) => {
  // console.log("CustomButton isPending:", isPending);
  return (
    <button
      type={type}
      style={style}
      className={`btn btn-${variant} ${className}`}
      // className={`btn btn-${variant} d-flex align-items-center justify-content-center gap-2 ${className}`}
      onClick={!isPending ? onClick : null}
      disabled={disabled || isPending}
    >
      {isPending && (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      <span className="ms-2">{isPending ? loadingText : text}</span>

      {/* <span>{isPending ? loadingText : children || text}</span> */}
    </button>
  );
};

export default CustomButton;
