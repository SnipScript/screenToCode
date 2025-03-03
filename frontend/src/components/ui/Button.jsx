import React from 'react';

const Button = ({ children, className, onClick, variant = 'default' }) => {
    const baseStyles = "px-4 py-2 rounded focus:outline-none";
    const variantStyles = {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
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