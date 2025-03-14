import React from "react";

const Button = ({
  children,
  className,
  onClick,
  variant = "default",
  isLoading = false,
}) => {
  const baseStyles = "px-4 py-2  focus:outline-none";
  const variantStyles = {
    default: "bg-black text-white hover:bg-grayColor",
    outline:
      "border border-grayColor text-grayColor hover:bg-grayColor hover:text-white",
  };

  return (
    <button
      disabled={isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;

const Spinner = () => {
  return (
    <span className="flex justify-center">
      <svg
        className="w-5 h-5 text-white animate-spin" // Add the animate-spin class here
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M14 2a10 10 0 0 1 4 8 10 10 0 0 1-4 8" />
      </svg>
    </span>
  );
};
