import React from 'react';

const Button = ({ children, className, onClick, variant = 'default' }) => {
    const baseStyles = "px-4 py-2 rounded focus:outline-none";
    const variantStyles = {
      default: "bg-grayColor text-white hover:bg-grayColor",
      outline:
        "border border-grayColor text-grayColor hover:bg-grayColor hover:text-white",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button; 